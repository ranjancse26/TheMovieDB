angular.module('tmdb-api-keyword', ['tmdb-config', 'tmdb-http'])
       .factory('TmdbApiKeyword', TmdbApiKeyword);

TmdbApiKeyword.$inject = ['TmdbHTTP'];

function TmdbApiKeyword(TmdbHTTP) {
    return {
        keyword : keyword,
        movies :  movies
    }

    function keyword(options) {
          return TmdbHTTP(angular.extend({}, options, {
              url:"keyword/" + options.query
          }));
    }

    function movies(options) {
          return TmdbHTTP(angular.extend({}, options, {
               url:"keyword/" + options.query + "/movies"
          }));
    }
}