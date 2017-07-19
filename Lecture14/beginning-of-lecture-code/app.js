(function () {
'use strict';

angular.module('CounterApp', [])
.controller('CounterController', CounterController);

CounterController.$inject = ['$scope'];

function CounterController($scope) {

  $scope.onceCounter = 0;
  $scope.counter = 0;
  $scope.name = "Aniket";
  
  $scope.showNumberOfWatchers = function () {
    console.log('Number of watchers: ', $scope.$$watchersCount);
  };

  $scope.countOnce = function(){
    $scope.onceCounter = 1;
  };

  $scope.upCounter  = function(){
    $scope.counter++;
  };

  // //Not Recommended
  // $scope.$watch('onceCounter', function(newValue, oldValue){
  //   console.log('Old Value:', oldValue);
  //   console.log('New Value:', newValue);
  // });
  //
  // //Not Recommended
  // $scope.$watch('counter', function(newValue, oldValue){
  //   console.log('Counter Old Value:', oldValue);
  //   console.log('Counter New Value:', newValue);
  // });

  $scope.$watch(function(){
    console.log('Digest Loop Fired!');
  });

}

})();
