(function () {
    function Message($firebaseArray) {
        //console.log("in Messages");
        var Message = {};
        var ref = firebase.database().ref().child("messages")
        var messages = $firebaseArray(ref);
        Message.getByRoomId = function (roomId) {
            return $firebaseArray(ref.orderByChild('roomId').equalTo(roomId));
        };
        Message.send = function (roomId, content) {
            console.log("it works");
            messages.$add({
                username: "<USERNAME HERE>"
                , content: content
                , sentAt: new Date().getTime()
                , roomId: roomId
            });
        }
        return Message;
    };
    angular.module('blocChat').factory('Message', ['$firebaseArray', Message]);
})();