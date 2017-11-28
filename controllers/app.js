var app = angular.module("myApp", ["ngRoute"]);
app.config(function($routeProvider) {
    $routeProvider
    .when("/", {
        templateUrl : "index.html"
    })
    .when("/assign", {
        templateUrl : "views/assign.html"
    })
    .when("/addNew", {
        templateUrl : "views/addNew.html"
    })
    .when("/remove", {
        templateUrl : "views/remove.html"
    });
});
app.controller("assignctrl",function($scope){
    $scope.assignedDevices=[];
$scope.assignitem=function(form){
    var devicedetails = angular.copy(form);
$scope.assignedDevices.push(devicedetails);
//$scope.json = angular.toJson(form);
//console.log($scope.json);
$scope.form={"empName":"","empId":"","deviceName":"","deviceModel":"","serialNo":"","deviceBrand":""};
}
});
