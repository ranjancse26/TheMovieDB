/**
 * Module dealing with configuration
 * http://docs.themoviedb.apiary.io/#configuration
 */
angular.module('tmdb-api-configuration', ['tmdb-config', 'tmdb-http'])
    .factory('TmdbApiConfiguration',TmdbApiConfiguration);

TmdbApiConfiguration.$inject = ['TmdbHTTP'];

function TmdbApiConfiguration(TmdbHTTP) {
    return {
        get : function (options) {
            return TmdbHTTP(angular.extend({}, options, {
                url:'configuration'
            }));
        }
    }
}