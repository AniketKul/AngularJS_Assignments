(function () {
'use strict';

angular.module('myFirstApp', [])

.controller('MyFirstController', function ($scope) {
  $scope.name="Aniket";

  $scope.sayHello = function(){
    return "Hello Aniket!";
  }

});

})();
