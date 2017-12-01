function StoryController($scope, marvelService, $routeParams){
    (function init() {
        var storyId = $routeParams.id;
        $scope.story = marvelService.getStory(storyId);
    })();
}

StoryController.$inject = ['$scope','marvelService','$routeParams'];

angular.module('marvelStory')
  .controller('StoryController', StoryController);
