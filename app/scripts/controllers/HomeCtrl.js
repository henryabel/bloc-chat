(function () {
    function HomeCtrl($uibModal, Room, Message) {
        var vm = this;
        vm.rooms = Room.all;
        vm.messages;
        vm.open = function () {
            var modalInstance = $uibModal.open({
                templateUrl: '/templates/modal.html'
                , controller: 'ModalInstanceCtrl'
                , controllerAs: '$ctrl'
            });
        }
        vm.setActiveRoom = function (room) {
            document.getElementById("roomTitle").innerHTML = room.title;
            vm.messages = Message.getByRoomId(room.$id);
        }
    }
    angular.module('blocChat').controller('HomeCtrl', ['$uibModal', 'Room', 'Message', HomeCtrl]);
})();