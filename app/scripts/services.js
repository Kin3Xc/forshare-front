(function() {
    'use strict';
    angular.module('appForshare.services',['ngResource']);

    function Item ($resource, BaseUrl) {
        return $resource(BaseUrl + '/items/:itemId'),
        { itemId : '@_id'};
    }
    function User ($resource, BaseUrl) {
        return $resource(BaseUrl + '/users/:userId'),
        { userId : '@_id'};
    }

    angular
    .module('appForshare.services')
    .constant('BaseUrl', 'UrlApixxxxForshare.co')
    .factory('Item', Item)
    .factory('User', User);

})();
