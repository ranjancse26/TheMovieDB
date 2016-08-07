angular
    .module('tmdb-http', ['tmdb-config'])
    .factory('TmdbHTTP', TmdbHTTP);

TmdbHTTP.$inject = ['$http', '$q', 'TmdbApiKey', 
         'TmdbBaseURL', 'TmdbConnectionMethod',
         'DefaultCache'];

function TmdbHTTP($http, $q, TmdbApiKey, TmdbBaseURL, TmdbConnectionMethod, DefaultCache)
{
    return function (options)
    {
        var url = TmdbBaseURL + options.url;
        var params = angular.extend({}, 
            options.params, 
            {
                api_key:TmdbApiKey
            });

        if (TmdbConnectionMethod === 'jsonp') 
        {
            params.callback = 'JSON_CALLBACK';
        }

        return $http[TmdbConnectionMethod](url, 
        {
            params:params,
            cache:angular.isDefined(options.cache) 
                        ? options.cache : DefaultCache
        });
    };
}