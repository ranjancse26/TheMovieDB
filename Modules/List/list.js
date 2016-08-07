angular.module('tmdb-api-list', ['tmdb-http'])
    .factory('TmdbApiList', ["TmdbHTTP", function (TmdbHTTP) {
    return {
        list:function (options) {
            return TmdbHTTP(angular.extend({}, options, {
                url:"list/" + options.query
            }));
        }
    };
}]);