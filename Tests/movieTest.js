(function () {
    'use strict';

    describe('movies', function () {
        beforeEach(module("tmdb-api-movie"));

        it('should make a jsonp request with id to get a movie', inject(function (TmdbApiMovie, TmdbBaseURL, TmdbApiKey, $httpBackend) {
            $httpBackend.expectJSONP(TmdbBaseURL+ "movie/3?api_key=" + TmdbApiKey+'&callback=JSON_CALLBACK').respond(200, {daMovie:1});
            var success;
            
            TmdbApiMovie.movie({
                query: 3
            }).then(function (movie,status,header,config) {
                success = movie.data;
            });
            
            $httpBackend.flush();
            expect(success.daMovie).toBe(1);
        }));

        it('should make a jsonp request with id to get alternative titles', inject(function (TmdbApiMovie, TmdbBaseURL, TmdbApiKey, $httpBackend) {
            $httpBackend.expectJSONP(TmdbBaseURL + "movie/3/alternative_titles?api_key=" + TmdbApiKey+'&callback=JSON_CALLBACK').respond(200, {daMovie:1});
            var success;
            
            TmdbApiMovie.alternativeTitles({
                query: 3
            }).then(function (movie) {
                success = movie.data;
            });
            
            $httpBackend.flush();
            expect(success.daMovie).toBe(1);
        }));

        it('should make a jsonp request to get upcoming movies', inject(function (TmdbApiMovie, TmdbBaseURL, TmdbApiKey, $httpBackend) {
            $httpBackend.expectJSONP(TmdbBaseURL + "movie/popular?api_key=" + TmdbApiKey+'&callback=JSON_CALLBACK').respond(200, {daMovie:1});
            var success;
            
            TmdbApiMovie.popular().then(function (movie) {
                success = movie.data;
            });
            
            $httpBackend.flush();
            expect(success.daMovie).toBe(1);
        }));

        it('should make a jsonp request to get upcoming movies and ignore the query', inject(function (TmdbApiMovie, TmdbBaseURL, TmdbApiKey, $httpBackend) {
            $httpBackend.expectJSONP(TmdbBaseURL + "movie/popular?api_key=" + TmdbApiKey+'&callback=JSON_CALLBACK').respond(200, {daMovie:1});
            var success;
            
            TmdbApiMovie.popular({
                query : 3
            }).then(function (movie) {
                success = movie.data;
            });
            
            $httpBackend.flush();
            expect(success.daMovie).toBe(1);
        }));
    });
})();