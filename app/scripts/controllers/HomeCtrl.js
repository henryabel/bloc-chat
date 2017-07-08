(function () {
    function HomeCtrl($uibModal, Room) {
        var vm = this;
        vm.rooms = Room.all;
        vm.open = function () {
            var modalInstance = $uibModal.open({
                templateUrl: '/templates/modal.html'
                , controller: 'ModalInstanceCtrl'
                , controllerAs: '$ctrl'
            });
            modalInstance.result.then(function onSuccess() {
                alert("success");
            }, function onError() {
                alert("failed");
            });
        }
        activate();

        function activate() {
            console.log("HomeCtrl" + (new Date().getTime()));
        }
    }
    angular.module('blocChat').controller('HomeCtrl', ['$uibModal', 'Room', HomeCtrl]);
})();
//ng-repeat="r in x"
//x[0].$value