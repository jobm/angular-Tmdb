var app = angular.module('app', ['ngRoute']);

app.config(function($routeProvider){
    $routeProvider
    .when('/',{
        templateUrl:'pages/main.html',
        controller: 'mainController'
    })

    .when('/movies/:prm',{
        templateUrl:'pages/movies.html',
        controller: 'moviesController'
    })

    .when('/movies/details/:id',{
        templateUrl: 'pages/movie_details.html',
        controller: 'moviesController'
    })

    .when('/about',{
        templateUrl:'pages/about.html',
        controller:'mainController'
    })
});


app.controller("mainController", function($scope,$http,$routeParams) {


    $http.get("https://api.themoviedb.org/3/movie/now_playing?api_key=b50218f262d316468a8928b0f29ac476").success(function(response){

        $scope.first_movie = response.results[0];
        $scope.sec_movie = response.results[1];
        $scope.third_movie = response.results[2];
        $scope.fourth_movie = response.results[3];

  });
});

app.controller("moviesController", function($scope,$http,$routeParams) {
    $scope.prm = $routeParams.prm;
    $http.get("https://api.themoviedb.org/3/movie/"+$scope.prm+"?api_key=b50218f262d316468a8928b0f29ac476").success(function(response){
    $scope.movies = response.results;
    $scope.image_url = response.results.poster_path;
    $scope.id = response.results.id;
  });
});







