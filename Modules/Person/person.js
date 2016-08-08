angular.module('tmdb-api-people', ['tmdb-http'])
       .factory('TmdbApiPeople', TmdbApiPeople);

TmdbApiPeople.$inject = ['TmdbHTTP']

function TmdbApiPeople(TmdbHTTP) {

    return {
        person : person,
        credits : credits,
        images : images,
        changes : changes,
        latest : latest
    }

    function person(options){
        return TmdbHTTP(angular.extend({}, options, {
                url:'person/' + options.query
        }));
    }

    function credits(options){
        return TmdbHTTP(angular.extend({}, options, {
                url:'person/' + options.query + "/credits"
        }));
    }

    function images(options){
        return TmdbHTTP(angular.extend({}, options, {
                url:'person/' + options.query + "/images"
        }));
    }

    function changes(options){
        return TmdbHTTP(angular.extend({}, options, {
                url:'person/' + options.query + "/changes"
        }));
    }

    function latest(options){
        return TmdbHTTP(angular.extend({}, options, {
                url:'person/latest'
        }));
    }
}