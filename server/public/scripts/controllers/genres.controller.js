app.controller('GenresController', function(service) {
    console.log('genres.controller connected');
    let vm = this;
    vm.getGenres = function() {
        console.log('in getGenres in genres.controller');
        service.requestGenres()
            .then(function() {
                vm.genres = service.genres.data;
                console.log('vm.genres=', vm.genres);
            })
    };

    vm.addGenre = function(name) {
        console.log('in addGenre in genres.controller');
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