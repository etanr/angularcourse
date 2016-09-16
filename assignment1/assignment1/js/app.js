(function () {
    'use strict';

    angular.module('CountApp', [])
        .controller('CountController', CountController);

    CountController.$inject = ['$scope'];
    function CountController($scope) {
        $scope.themessage = "";
        $scope.dishes = "";

        $scope.countIt = function () {
            var theresult;

            theresult = ($scope.dishes).split(",").length;
            $scope.themessage= theresult + " Enjoy"
            if(theresult >=3 ){$scope.themessage= theresult + " Too Much!"}
            if($scope.dishes == "" ){$scope.themessage= "Please enter data first"}
        };
    }

})();
