var app = angular.module("MovieApp", []);

app.controller("mainController", function($scope,$http) {

  $http.
  get("https://api.themoviedb.org/3/movie/top_rated?api_key=b50218f262d316468a8928b0f29ac476").
  success(function(response){
    $scope.movies = response.results;
    $scope.image_url = response.results.poster_path;
  });

  /*$http.get("https://api.themoviedb.org/3/movie/550?api_key=b50218f262d316468a8928b0f29ac476").success(function(response) {

    $scope.name = response.title;
    $scope.tagline = response.tagline;
    $scope.budget = response.budget;
    for(var i = 0; i < response.genres.length; i++){
      $scope.genre = response.genres[i].name;
    }
  });*/
});
