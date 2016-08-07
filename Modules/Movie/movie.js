/**
 * Module dealing with movie related stuff.
 * http://docs.themoviedb.apiary.io/#movies
 */
angular
    .module('tmdb-api-movie', ['tmdb-config', 'tmdb-http'])
    .factory('TmdbApiMovie', TmdbApiMovie);

TmdbApiMovie.$inject = ['$q', 'TmdbHTTP'];

function TmdbApiMovie($q, TmdbHTTP) {
    var noQuery = ['latest', 'upcoming', 'now_playing',
                   'popular', 'top_rated'];

    return {
        movie : movie,
        alternativeTitles : alternativeTitles,
        casts : casts,
        images : images,
        keywords : keywords,
        releases :releases,
        trailers : trailers,
        translations : translations,
        similarMovies : similarMovies,
        lists : lists,
        changes : changes,
        latest : latest,
        upcoming : upcoming,
        nowPlaying : nowPlaying,
        popular : popular,
        topRated : topRated
    }

    function get(options, type) {
        var opts = options || {};
        var action = type === '' ? '' : ('/' + type);
        
        if (noQuery.indexOf(type) >= 0) {
            delete opts.query;
        }
        
        if (!opts.query) {
            if (noQuery.indexOf(type) < 0) {
                return $q.reject();
            }
        } else {
            action = '/' + opts.query + action;
        }
        
        return TmdbHTTP(angular.extend({}, opts, {
            url:'movie' + action
        }));
    }

    function movie(options) {
        return get(options, '');
    }

    function alternativeTitles(options) {
        return get(options, 'alternative_titles');
    }
    
    function casts(options) {
        return get(options, 'casts');
    }

    function images(options) {
        return get(options, 'images');
    }

    function keywords(options) {
        return get(options, 'keywords');
    }

    function releases(options) {
        return get(options, 'releases');
    }
    
    function trailers(options) {
        return get(options, 'trailers');
    }
    
    function translations(options) {
        return get(options, 'translations');
    }
    
    function similarMovies(options) {
        return get(options, 'similar_movies');
    }
    
    function lists(options) {
        return get(options, 'lists');
    }
    
    function changes(options) {
        return get(options, 'changes');
    }
    
    function latest(options) {
        return get(options, 'keywords');
    }
    
    function upcoming(options) {
        return get(options, 'upcoming');
    }
    
    function nowPlaying(options) {
        return get(options, 'now_playing');
    }
    
    function popular(options) {
        return get(options, 'popular');
    }
    
    function topRated(options) {
        return get(options, 'top_rated');
    }
}