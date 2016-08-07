angular.module('tmdb-api-people', ['tmdb-http'])
    .factory('TmdbApiPeople', ["TmdbHTTP", function (TmdbHTTP) {
    return {
        person:function (options) {
            return TmdbHTTP(angular.extend({}, options, {
                url:'person/' + options.query
            }));
        },
        credits:function (options) {
            return TmdbHTTP(angular.extend({}, options, {
                url:'person/' + options.query + "/credits"
            }));
        },
        images:function (options) {
            return TmdbHTTP(angular.extend({}, options, {
                url:'person/' + options.query + "/images"
            }));
        },
        changes:function (options) {
            return TmdbHTTP(angular.extend({}, options, {
                url:'person/' + options.query + "/changes"
            }));
        },
        latest:function (options) {
            return TmdbHTTP(angular.extend({}, options, {
                url:'person/latest'
            }));
        }
    };
}]);