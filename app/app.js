angular.module('marvelStory', [
  'ngRoute'
])
.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/stories/:id', {
    templateUrl: '/story/story.html',
    controller: 'StoryController'
  }).otherwise({
      redirectTo: '/'
  });;
}])
