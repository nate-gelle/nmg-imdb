app.service( 'service', function( $http ){
    console.log('service connected');
    let sv = this;
    sv.requestMovies = function(){
          return $http({
            method: 'GET',
            url: '/movies'
          })
          .then(function(response) {
            console.log('back from imdb with', response);
            sv.movies = response;
            console.log('sv.movies=', sv.movies);
          }).catch(function(error){
            console.log('error getting movies', error);
          });
      };
  });