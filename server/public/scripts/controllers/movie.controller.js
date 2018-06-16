app.controller('MoviesController', function(service) {
    console.log('movie.controller connected');
    let vm = this;

    vm.getMovies = function() {
        console.log('in getMovies in movie.controller');
        service.requestMovies()
            .then(function() {
                vm.movies = service.movies.data;
                console.log('vm.movies=', vm.movies);
            })
    };

    vm.addMovie = function(name, genre, release, time) {
        console.log('in addMovies in movie.controller');
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
        service.putMovie(id, title, genre, release, time)
        .then(function() {
          vm.getMovies();
        })
    };

    vm.getMovies();

    vm.getGenres = function() {
        console.log('in getGenres in movie.controller');
        service.requestGenres()
            .then(function() {
                vm.genres = service.genres.data;
                console.log('vm.genres=', vm.genres);
            })
    };

    vm.getGenres();

});