var app = angular.module('app', ['ngRoute']);

app.controller("mainController", function($scope,$http,$routeParams) {
 $scope.title = "Movies";
});

app.controller("moviesCotroller", function($scope,$http,$routeParams) {
    $http.get("https://api.themoviedb.org/3/movie/top_rated?api_key=b50218f262d316468a8928b0f29ac476").success(function(response){
    $scope.movies = response.results;
    $scope.image_url = response.results.poster_path;
  });
});
//app.directive('movieImage', function(){
//    return function(scope, element, attrs) {
//        scope.$watch(attrs.movieImage, function(value) {
//            element.css({
//                'background-image': 'url(' + value +')',
//                'background-size' : 'cover'
//            });
//        });
//    };
//});

app.config(function($routeProvider){
    $routeProvider
    .when('/',{
        templateUrl:'pages/main.html',
        controller: 'mainController'
    })

    .when('/movies',{
        templateUrl:'pages/movies.html',
        controller: 'moviesCotroller'
    })
});






