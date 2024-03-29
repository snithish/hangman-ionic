// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
var app = angular.module('hangman', ['ionic', 'ionic.contrib.drawer.vertical', 'rzModule'])

app.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    if(window.cordova && window.cordova.plugins.Keyboard) {
      // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
      // for form inputs)
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);

      // Don't remove this line unless you know what you are doing. It stops the viewport
      // from snapping when text inputs are focused. Ionic handles this internally for
      // a much nicer keyboard experience.
      cordova.plugins.Keyboard.disableScroll(true);
    }
    if(window.StatusBar) {
      StatusBar.styleDefault();
    }
    ionic.Platform.fullScreen(true, false);
  });
})

app.controller('difficultyControl', ['$scope', function($scope) {
   $scope.slider = {
        value: 1,
        options: {showTicksValues:true, stepsArray:['noob', 'average', 'wordsmith'], showSelectionBar:true, getSelectionBarColor:function(value) {
          if(value == 1)
            return '#ffff1a';
          if(value == 2)
            return '#e51b1b';
          return '#99cc99';
        }}
    };
  }
])
