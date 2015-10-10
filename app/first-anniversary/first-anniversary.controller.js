(function() {
        app.controller('FirstAnniversaryController', FirstAnniversaryController);
        FirstAnniversaryController.$inject = ["$scope"];
        function FirstAnniversaryController($scope) {
            $scope.todayDate = new Date();
            $scope.todayMessage = "The first anniversary with the last girlfriend. I love you, Marina!";
        }
})();
