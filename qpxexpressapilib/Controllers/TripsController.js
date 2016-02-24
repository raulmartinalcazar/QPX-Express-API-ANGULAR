/**
  *QPXExpressAPILib
  *
  * This file was automatically generated by APIMATIC BETA v2.0 on 02/24/2016
  */

'use strict';
angular.module('QPXExpressAPILib').factory('TripsController',function($q,Configuration,HttpClient,APIHelper){
    return{
        /**
         * Returns a list of flights.
         * @param {TripsSearchRequest} body    Required parameter: TODO: type description here
         *
         * @return {promise<TripsSearchResponse>}
         */
        createSearch : function(body){

            //prepare query string for API call
            var baseUri = Configuration.BASEURI
            var queryBuilder = baseUri + "/search";
            
            //validate and preprocess url
            var queryUrl = APIHelper.cleanUrl(queryBuilder);
            
            //prepare headers
            var headers = {
                "accept" : "application/json",
                "content-type" : "application/json; charset=utf-8"
            };

            //Remove null values
            APIHelper.cleanObject(body);

            //prepare and invoke the API call request to fetch the response
            var config = {
                method : "POST",
                queryUrl : queryUrl,
                headers: headers,
                body : body
            };
            
            var response = HttpClient(config);
                    
            //Create promise to return
            var deffered= $q.defer();
                    
            //process response
            response.then(function(result){
                deffered.resolve(result.body);
            },function(result){
                //Error handling for custom HTTP status codes
                deffered.reject(APIHelper.appendContext({errorMessage:"HTTP Response Not OK", errorCode: result.code, errorResponse: result.message},result.getContext()));
            });
            
            return deffered.promise;
        }
    }
});