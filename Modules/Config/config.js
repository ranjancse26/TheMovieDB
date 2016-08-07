angular.module('tmdb-config', [])
    .value('TmdbBaseURL','http://api.themoviedb.org/3/')
    .value('TmdbApiKey','')
    .value('TmdbConnectionMethod','jsonp')
    .value('DefaultCache',true);
