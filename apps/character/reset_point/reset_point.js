/**
 * Created by TuanLe on 10/9/2017.
 */
(function() {
    angular
        .module('app')
        .controller('ResetPointCtrl', ResetPointCtrl);

    function ResetPointCtrl($scope, $rootScope, $http, $window) {
        $rootScope.charChoose = JSON.parse(sessionStorage.getItem('charChoose'));
        console.log($rootScope.charChoose)
    }
})();