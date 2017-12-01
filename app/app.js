'use strict';

// Declare app level module which depends on views, and components
angular.module('marvelStory', [
  'ngRoute'
])
.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/stories/:id', {
    templateUrl: 'story/story.html',
    controller: 'StoryController'
  });
}])
