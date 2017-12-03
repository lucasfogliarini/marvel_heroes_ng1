function StoryController($scope, marvelService, $routeParams){
    var characterId = $routeParams.characterId;
    toggleLoader(true);
    marvelService.getRandomStory(characterId).then(function (story) {
      $scope.story = story;
      marvelService.getStoryCharacters(story.id).then(function (storyCharacters) {
        $scope.storyCharacters = storyCharacters;
        toggleLoader(false);
      });
    });
}

StoryController.$inject = ['$scope','marvelService','$routeParams'];

angular.module('marvelHeroes')
  .controller('StoryController', StoryController);
