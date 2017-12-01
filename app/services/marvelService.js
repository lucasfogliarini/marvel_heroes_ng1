angular.module('marvelStory')
  .service('marvelService', ['$http', function($http){
      this.getStory = function(storyId){
          let story = this.httpGet('stories/'+storyId);
          let characters = [];

          return {
             title: story.title,
             description: story.description,
             characters: characters
          };
      };
      this.getStoryCharacters = function(storyId){
          return [{
             name: "joao",
             thumbnail: "b"
          },
          {
             name: "d",
             thumbnail: "a"
          }];
      };
      //https://gateway.marvel.com/v1/public/{resourcePath}
      this.httpGet = function(resourcePath){
          let url = this.apiUrl + resourcePath;
          url += this.getKeyParams();
          $http.get(url).then(function (response) {
              return response;
          }, function (response) {
              throw new Error(response);
          });
      }
      this.apiUrl = 'https://gateway.marvel.com/v1/public/';
      this.getKeyParams = function()
      {
          let publicKey = '014a3e43d9360b51181807971ceac85e';
          let hash = 'ec01fdc8cdbbb03b29f880d0f99fc52b';//for 1
          return '?apikey='+publicKey+'&hash='+hash+'&ts=1';
      };
  }]);
