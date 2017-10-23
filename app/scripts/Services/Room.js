(function () {
    function Room($firebaseArray) {
        //console.log("in Room");
        var Room = {};
        var ref = firebase.database().ref().child("rooms");
        var rooms = $firebaseArray(ref);
        Room.all = rooms;
        Room.add = function (title) {
            //Use the firebase method $add here
            rooms.$add({
                title: title
                , createdAt: (new Date()).getTime()
            });
        }
        return Room;
    }
    angular.module('blocChat').factory('Room', ['$firebaseArray', Room]);
})();