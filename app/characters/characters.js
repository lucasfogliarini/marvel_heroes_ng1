function CharactersController($scope, marvelService){
    toggleLoader(true);
    marvelService.getCharacters().then(function (characters) {
      $scope.characters = characters;
      toggleLoader(false);
    });
}

CharactersController.$inject = ['$scope','marvelService'];

angular.module('marvelHeroes')
  .controller('CharactersController', CharactersController);
