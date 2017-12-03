angular.module('marvelHeroes', [
  'ngRoute'
])
.config(['$routeProvider', function($routeProvider) {
  $routeProvider
  .when('/story', {
    templateUrl: '/story/story.html',
    controller: 'StoryController'
  })
  .when('/characters', {
    templateUrl: '/characters/characters.html',
    controller: 'CharactersController'
  })
  .otherwise({
      redirectTo: '/'
  });;
}]);
