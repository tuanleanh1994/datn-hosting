/**
 * Created by TuanLe on 10/9/2017.
 * Website: http://hoangtueck94.com
 */
(function() {
    angular
        .module('app')
        .controller('LockItemCtrl', LockItemCtrl);

    function LockItemCtrl($scope, $rootScope, $http, $window) {
        $rootScope.charChoose = JSON.parse(sessionStorage.getItem(LOCALSTORAGE_CHARCHOOSE));
        console.log($rootScope.charChoose)
    }
})();