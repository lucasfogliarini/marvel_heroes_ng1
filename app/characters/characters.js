function CharactersController($scope, marvelService){
    marvelService.getCharacters().then(function (characters) {
      $scope.characters = characters;
    });
}

CharactersController.$inject = ['$scope','marvelService'];

angular.module('marvelStory')
  .controller('CharactersController', CharactersController);
