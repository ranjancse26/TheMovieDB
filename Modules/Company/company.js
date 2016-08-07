angular.module('tmdb-api-company', ['tmdb-config', 'tmdb-http'])
    .factory('TmdbApiCompany', TmdbApiCompany);

TmdbApiCompany.$inject = ['TmdbHTTP']

function TmdbApiCompany(TmdbHTTP) {
    return {
        company : function (options) {
            return TmdbHTTP(angular.extend({}, options, {
                url:"company/" + options.query
            }));
        },

        movies : function (options) {
            return TmdbHTTP(angular.extend({}, options, {
                url:"company/" + options.query + "/movies"
            }));
        }
    }
}