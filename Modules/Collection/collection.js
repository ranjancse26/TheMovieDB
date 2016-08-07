angular
    .module('tmdb-api-collection',['tmdb-config', 'tmdb-http'])
    .factory('TmdbApiCollection', TmdbApiCollection);

TmdbApiCollection.$inject = ['TmdbHTTP'];

function TmdbApiCollection(TmdbHTTP) {
    return {
        collection: collection,
        images: images
    }

    function images(options){
       return TmdbHTTP(angular.extend({}, options, {
            url:"collection/" + options.query + "/images"
       }));            
    }
    
    function collection(options){
        return TmdbHTTP(angular.extend({}, options, {
            url:"collection/" + options.query
        }));
    }
}