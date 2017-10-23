(function () {
    console.log("in cookies");

    function BlocChatCookies($cookies, $uibModal) {
        console.log("in cookies");
        var currentUser = $cookies.get('blocChatCurrentUser');
        if (!currentUser || currentUser === '') {
            $uibModal.open({
                // Modal configuration object properties
            })
        }
    }
    angular.module('blocChat').run(['$cookies', '$uibModal', BlocChatCookies]);
})();