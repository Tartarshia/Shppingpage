"cart"

"use strict"

App.config(['$routeProvider',function($routes){
  $route.when('/',{
    templateUrl:'templates/home.html',
    controller:HomeCtrl
  });
  $route.when('/register',{
    templateUrl:'templates/register.html',
    controller:RegisterCtrl
  });
  $routes.otherwise({
    redirectTo:"/"
  });
}])
