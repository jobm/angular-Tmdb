var app = angular.module("MovieApp", ['ngRoute']);

app.config(function($routeProvider){
  $routeProvider
  .when('/',{
    templateUrl:'pages/movies.html'
    controller:'mainController'
  })
}
app.controller("mainController", function($scope,$http) {

  $http.get("https://api.themoviedb.org/3/movie/top_rated?api_key=b50218f262d316468a8928b0f29ac476").success(function(response){
    $scope.movies = response.results;
    $scope.image_url = response.results.poster_path;
  });
});
