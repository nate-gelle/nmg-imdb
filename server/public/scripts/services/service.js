app.service( 'service', function( $http ) {
    console.log('service connected');
    let sv = this;
    sv.requestMovies = function() {
        return $http({
            method: 'GET',
            url: '/movies'
        }).then(function(response) {
            console.log('back from imdb with', response);
            sv.movies = response;
            console.log('sv.movies=', sv.movies);
        }).catch(function(error){
            console.log('error getting movies', error);
        })
    };

    sv.postMovie = function(title, genre, release, time) {
        return $http({
          method: 'POST',
          url: '/movies',
          data: {
            title: title,
            genre: genre,
            release: release,
            time: time
          }
        }).then(function(response) {
          console.log('added movie', response);
        }).catch(function(error) {
            console.log('error adding movie', error);
        })
    };

    sv.deleteMovie = function(param) {
        return $http({
            method: 'DELETE',
            url: `/movies/${param}`
          }).then(function(response) {
            console.log('deleted movie', response);
          }).catch(function(error) {
            console.log('error deleting movie', error);
          })
    };

    sv.putMovie = function(id, prop1, prop2, prop3, prop4, prop5) {
        return $http({
            method: 'PUT',
            url: '/universe',
            params: {
                id: id,
                title: prop1,
                genre: prop2,
                release: prop3,
                time: prop4,
                image: prop5
            }
        }).then(function(response) {
          console.log('edited movie', response);
        }).catch(function(error) {
          console.log('error editing movie', error);
        })
    };

    sv.requestGenres = function() {
        return $http({
            method: 'GET',
            url: '/genres/basic'
        }).then(function(response) {
          console.log('back from imdb with', response);
          sv.genres = response;
          console.log('sv.genres=', sv.genres);
        }).catch(function(error){
          console.log('error getting genres', error);
        })
    };


    sv.postGenre = function(name) {
        return $http({
            method: 'POST',
            url: '/genres',
            data: {
                name: name
            }
        }).then(function(response) {
            console.log('added genre', response);
        }).catch(function(error) {
            console.log('error adding genre', error);
        })
    };

    sv.deleteGenre = function(id) {
        return $http({
            method: 'DELETE',
            url: `/genres/${id}`
        }).then(function(response) {
            console.log('deleted genre', response);
        }).catch(function(error) {
            console.log('error deleting genre', error);
        })
    };

});