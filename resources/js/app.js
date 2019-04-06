var app = angular.module('banksApp', ['ngMaterial', 'ngMessages']);
app.config(function ($mdThemingProvider) {
  $mdThemingProvider.theme('default')
    .primaryPalette('blue')
    .accentPalette('pink');
});
app.controller('webController', function ($scope, dataService) {
  $scope.loading = true;
  var init = function () {
    dataService.getBanks('MUMBAI').then(function (data) {
      $scope.banks = data;
      $scope.loading = false;
    });
    $scope.quantity = 50;
  };
  $scope.tab = function (selectCity) {
    if(selectCity == '' || selectCity == null || selectCity == undefined){
      selectCity = 'MUMBAI'
    }
    $scope.loading = true;
    dataService.getBanks(selectCity).then(function (data) {
      $scope.banks = data;
      $scope.loading = false;
    });
  };
  angular.element('[ng-controller=webController]').ready(init);
});