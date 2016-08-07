angular.module('tmdb-demo', ['tmdb-api'])
       .controller('FacadeController', FacadeController);

FacadeController.$inject = ['$scope', '$window',
         'TmdbApiMovie', 'TmdbApiCollection', 
         'TmdbApiKeyword', 'TmdbApiPeople',
         'TmdbApiCompany', 'TmdbApiList',
         'TmdbApiConfiguration'];

function FacadeController($scope, $window, 
        TmdbApiMovie, TmdbApiCollection, 
        TmdbApiKeyword, TmdbApiPeople,
        TmdbApiCompany, TmdbApiList,
        TmdbApiConfiguration) {
     
        var success = function (results) {
            $scope.searchResult = angular.toJson(results, true);
        };

        var error = function (results) {
            $scope.searchResult = results;
        };
        
        $scope.exec = function(type,method,query){

            if(type == 'configuration'){
                return TmdbApiConfiguration.get({
                        query: query
                }).then(success,error);
            }

            switch(method){
                case "movie":
                     TmdbApiMovie.movie({
                        query: query
                     }).then(success,error);
                break;
                case "collection":
                     TmdbApiCollection.collection({
                        query: query
                     }).then(success,error);
                break;
                case "person":
                     TmdbApiPeople.person({
                        query: query
                     }).then(success,error);
                break;
                case "list":
                     TmdbApiList.list({
                        query: query
                     }).then(success,error);
                break;
                case "company":
                     TmdbApiCompany.movies({
                        query: query
                     }).then(success,error);
                break;
                case "keyword":
                    TmdbApiKeyword.movies({
                        query: query
                     }).then(success,error);
                break;
            }           
        }
};
