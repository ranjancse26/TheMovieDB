angular.module('tmdb-config', [])
    .value('TmdbBaseURL','http://api.themoviedb.org/3/')
    .value('TmdbApiKey','5ad5cb20f652725acb69f7b0f59e91f4')
    .value('TmdbConnectionMethod','jsonp')
    .value('DefaultCache',true);
