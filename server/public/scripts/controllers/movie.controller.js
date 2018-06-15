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

    vm.addMovie = function(name, genre, release, time) {
        console.log('in addMovies in movies.controller');
        service.postMovie(name, genre, release, time)
            .then(function() {
                vm.getMovies();
            })  
    };

    vm.deleteMovie = function(id) {
        service.deleteMovie(id)
        .then(function() {
            vm.getMovies();
        })
    };

    vm.editMovie = function(id, title, genre, release, time) {
        service.putMovie(id, vm.title, vm.genre, vm.release, vm.time)
        .then(function() {
          vm.getMovies();
        })
    };

    vm.getMovies();

});