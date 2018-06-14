app.controller('MoviesController', function(service) {
    console.log('movies.controller connected');
    let vm = this;
    vm.getMovies = function() {
        console.log('in getMovies in movies.controller');
        service.requestMovies()
            .then(function() {
                vm.movies = service.movies.data;
                console.log('vm.movies=', vm.movies);
            })
    };
    vm.getMovies();
});