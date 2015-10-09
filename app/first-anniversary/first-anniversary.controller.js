(function() {
        app.controller('FirstAnniversaryController', FirstAnniversaryController);
        FirstAnniversaryController.$inject = ["$scope"];
        function FirstAnniversaryController($scope) {
            $scope.todayDate = new Date();
            $scope.todayMessage = "The first things are the best things";
        }
})();
