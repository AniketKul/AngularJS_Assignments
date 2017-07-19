(function () {
'use strict';

angular.module('MsgApp', [])
.controller('MsgController', MsgController);

MsgController.$inject = ['$scope'];
function MsgController($scope) {
  $scope.name = "Aniket";
  $scope.stateOfBeing = "hungry";

  $scope.sayMessage = function(){
    return "Aniket likes Chicken Tikka Masala!";
  };

  $scope.feedAniket = function(){
    $scope.stateOfBeing = "fed"; 
  };

}

})();
