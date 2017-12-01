function StoryController($scope, marvelService, $routeParams){
    (function init() {
        var storyId = $routeParams.id;
        marvelService.getStory(storyId).then(function (story) {
          $scope.story = story;
        });
        marvelService.getStoryCharacters(storyId).then(function (storyCharacters) {
          $scope.storyCharacters = storyCharacters;
        });
    })();
}

StoryController.$inject = ['$scope','marvelService','$routeParams'];

angular.module('marvelStory')
  .controller('StoryController', StoryController);
