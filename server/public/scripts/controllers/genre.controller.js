app.controller('GenreController', function(service) {
    console.log('genre.controller connected');
    let vm = this;
    vm.getGenres = function() {
        console.log('in getGenres in genre.controller');
        service.requestGenres()
            .then(function() {
                vm.genres = service.genres.data;
                console.log('vm.genres=', vm.genres);
            })
    };

    vm.getGenres();

    vm.addGenre = function(name) {
        console.log('in addGenre in genre.controller');
        service.postGenre(name)
            .then(function() {
                vm.getGenres();
            })  
    };

    vm.deleteGenre = function(id) {
        service.deleteGenre(id)
        .then(function() {
            vm.getGenres();
        })
    };

});