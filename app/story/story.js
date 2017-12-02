function StoryController($scope, marvelService, $routeParams){
    var characterId = $routeParams.characterId;
    marvelService.getRandomStory(characterId).then(function (story) {
      $scope.story = story;
      marvelService.getStoryCharacters(story.id).then(function (storyCharacters) {
        $scope.storyCharacters = storyCharacters;
      });
    });
}

StoryController.$inject = ['$scope','marvelService','$routeParams'];

angular.module('marvelStory')
  .controller('StoryController', StoryController);
