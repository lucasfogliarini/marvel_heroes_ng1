angular.module('marvelHeroes')
  .service('marvelService', ['$http', '$q', function($http, $q){
      let _marvelService = this;
      this.getRandomStory = function(characterId, maxRandom){
          let def = $q.defer();
          let offset = this.getRandomInt(maxRandom || 100);
          this.httpGet('characters/'+characterId+'/stories?limit=1&offset='+offset+'&').then(function (response) {
             if (response.data.data.count > 0) {//if found a story
                 let story = response.data.data.results[0];
                 def.resolve({
                    id: story.id,
                    title: story.title,
                    description: story.description,
                    attributionText: response.data.attributionText
                 });
             } else if (response.data.data.total > 0) {//if not found a story, but can found one
                _marvelService.getRandomStory(characterId, response.data.data.total - 1).then(function(story) {
                    def.resolve(story);
                });;
             }
          });
          return def.promise;
      };
      this.getStoryCharacters = function(storyId){
          let def = $q.defer();
          this.httpGet('stories/'+storyId+'/characters?').then(function (response) {
              let characters = _marvelService.parseCharacters(response);
              def.resolve(characters);
          });
          return def.promise;
      };
      this.getCharacters = function(){
          let def = $q.defer();
          this.httpGet('characters?').then(function (response) {
              let characters = _marvelService.parseCharacters(response);
              def.resolve(characters);
          });
          return def.promise;
      };
      this.parseCharacters = function(response){
        let characters = [];
        response.data.data.results.forEach(function(char){
          characters.push({
             id: char.id,
             name: char.name,
             //https://developer.marvel.com/documentation/images
             thumbnail: char.thumbnail.path + '/standard_xlarge.' + char.thumbnail.extension
          });
        });
        return characters;
      }

      this.getRandomInt = function(max){
         return Math.floor(Math.random() * (max - 1)) + 1
      };
      //https://gateway.marvel.com/v1/public/{resourcePath}
      this.httpGet = function(resourcePath){
          let url = this.apiUrl + resourcePath;
          url += this.getKeyParams();
          return $http.get(url);
      };
      this.apiUrl = 'https://gateway.marvel.com/v1/public/';
      this.getKeyParams = function(){
          let publicKey = '014a3e43d9360b51181807971ceac85e';
          let hash = 'ec01fdc8cdbbb03b29f880d0f99fc52b';//for 1
          return 'apikey='+publicKey+'&hash='+hash+'&ts=1';
      };
  }]);
