(function() {
    'use strict';
    angular.module('appForshare.controllers',['appForshare.services']);

    function HomeController(Item) {
        this.Items = Item.query();
    }

})();
