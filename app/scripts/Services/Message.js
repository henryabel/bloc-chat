(function () {
    function Message($firebaseArray) {
        var tempRoomId1 = "-Kwx2shcvslekPFi-lyC";
        var tempRoomId2 = "-Kwx2u7ZbwL2YwJpyDK4";
        var tempRoomId3 = "-Kwx2wPJPoZIZWFXoxah";
        var tempRoomId4 = "-Kx-mAIS2knHuq6P7r37";
        var Message = {};
        var ref = firebase.database().ref().child("messages")
        var messages = $firebaseArray(ref);
        Message.getByRoomId = function (roomId) {
            return $firebaseArray(ref.orderByChild('roomId').equalTo(roomId));
        };
        Message.add = function () {
                //Use the firebase method $add here
                messages.$add({
                    username: "<USERNAME HERE>"
                    , content: "These are messages for Room Pepsi"
                    , sentAt: new Date().getTime()
                    , roomId: tempRoomId1
                });
            }
            //create sample messages
            /*for (var i = 0; i < 4; i++) {
                Message.add();
            }
            return Message;*/
    };
    angular.module('blocChat').factory('Message', ['$firebaseArray', Message]);
})();