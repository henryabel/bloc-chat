(function () {
    function ModalInstanceCtrl($uibModalInstance, Room) {
        var $ctrl = this;
        $ctrl.title = "Create new room";
        $ctrl.createRoom = function (roomName) {
            Room.add(roomName);
            $uibModalInstance.close('success');
        };
        $ctrl.cancel = function () {
            $uibModalInstance.dismiss('cancel');
        };
        activate();

        function activate() {
            console.log("it works");
        }
    }
    angular.module('blocChat').controller('ModalInstanceCtrl', ['$uibModalInstance', 'Room', ModalInstanceCtrl]);
})();