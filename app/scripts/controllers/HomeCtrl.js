(function () {
    function HomeCtrl($uibModal, Room, Message) {
        var vm = this;
        vm.rooms = Room.all;
        vm.open = function () {
            var modalInstance = $uibModal.open({
                templateUrl: '/templates/modal.html'
                , controller: 'ModalInstanceCtrl'
                , controllerAs: '$ctrl'
            });
        }
        vm.loadMessages = function (room) {
            document.getElementById("roomTitle").innerHTML = room.title;
            return Message.getByRoomId(room.$id);
        };
    }
    angular.module('blocChat').controller('HomeCtrl', ['$uibModal', 'Room', 'Message', HomeCtrl]);
})();