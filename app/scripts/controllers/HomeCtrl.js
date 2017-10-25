(function () {
    function HomeCtrl($uibModal, Room, Message) {
        var vm = this;
        vm.activeRoom;

        function setInputAndButton(val) {
            document.getElementById('userMessage').disabled = val;
            document.getElementById('Send').disabled = val;
        };
        setInputAndButton(true);
        vm.enter = function () {
            if (vm.activeRoom && vm.userMessage) {
                Message.send(vm.activeRoom, vm.userMessage);
                vm.userMessage = "";
            }
        };
        vm.rooms = Room.all;
        vm.messages;
        vm.open = function () {
            var modalInstance = $uibModal.open({
                templateUrl: '/templates/modal.html'
                , controller: 'ModalInstanceCtrl'
                , controllerAs: '$ctrl'
            });
            //vm.setActiveRoom(Room.all[Room.all.length - 1]);
        }
        vm.setActiveRoom = function (room) {
            setInputAndButton(false);
            vm.roomTitle = room.title;
            vm.messages = Message.getByRoomId(room.$id);
            vm.activeRoom = room.$id;
        }
    }
    angular.module('blocChat').controller('HomeCtrl', ['$uibModal'
        , 'Room', 'Message'
        , HomeCtrl]);
})();