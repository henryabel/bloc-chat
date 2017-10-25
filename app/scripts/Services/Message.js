(function () {
    function Message($firebaseArray, $cookies) {
        var Message = {};
        var ref = firebase.database().ref().child("messages")
        var messages = $firebaseArray(ref);
        Message.getByRoomId = function (roomId) {
            return $firebaseArray(ref.orderByChild('roomId').equalTo(roomId));
        };
        Message.send = function (roomId, content) {
            messages.$add({
                username: $cookies.get('blocChatCurrentUser')
                , content: content
                , sentAt: new Date().getTime()
                , roomId: roomId
            });
        }
        return Message;
    };
    angular.module('blocChat').factory('Message', ['$firebaseArray', '$cookies', Message]);
})();