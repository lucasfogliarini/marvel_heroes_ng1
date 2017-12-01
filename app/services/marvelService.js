angular.module('marvelStory')
  .service('marvelService', ['$http', '$q', function($http, $q){
      this.getStory = function(storyId){
          let def = $q.defer();
          this.httpGet('stories/'+storyId).then(function (response) {
              let story = response.data.data.results[0];
              def.resolve({
                 title: story.title,
                 description: story.description
              });
          }, function (response) {
              def.reject(response);
          });
          return def.promise;
      };
      this.getStoryCharacters = function(storyId){
          let def = $q.defer();
          this.httpGet('stories/'+storyId+'/characters').then(function (response) {
              let characters = [];
              response.data.data.results.forEach(function(char){
                characters.push({
                   id: char.id,
                   name: char.name,
                   //https://developer.marvel.com/documentation/images
                   thumbnail: char.thumbnail.path + '/portrait_xlarge.' + char.thumbnail.extension
                });
              });
              def.resolve(characters);
          });
          return def.promise;
      };
      //https://gateway.marvel.com/v1/public/{resourcePath}
      this.httpGet = function(resourcePath){
          let url = this.apiUrl + resourcePath;
          url += this.getKeyParams();
          return $http.get(url);
      }
      this.apiUrl = 'https://gateway.marvel.com/v1/public/';
      this.getKeyParams = function()
      {
          let publicKey = '014a3e43d9360b51181807971ceac85e';
          let hash = 'ec01fdc8cdbbb03b29f880d0f99fc52b';//for 1
          return '?apikey='+publicKey+'&hash='+hash+'&ts=1';
      };
  }]);
