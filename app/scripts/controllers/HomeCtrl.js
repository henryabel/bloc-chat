(function () {
    function HomeCtrl($uibModal, Room, Message) {
        var vm = this;
        vm.activeRoom;
        vm.enter = function () {
            if (vm.activeRoom) {
                vm.userMessage = document.getElementById("userMessage").value;
                document.getElementById("userMessage").value = "";
                Message.send(vm.activeRoom, vm.userMessage);
            }
            else alert("Enter or create a room to send a message");
        };
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
            vm.activeRoom = room.$id;
        }
    }
    angular.module('blocChat').controller('HomeCtrl', ['$uibModal'
        , 'Room', 'Message'
        , HomeCtrl]);
})();