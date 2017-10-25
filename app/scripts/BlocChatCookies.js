(function () {
    function BlocChatCookies($cookies, $uibModal) {
        var currentUser = $cookies.get('blocChatCurrentUser');
        if (!currentUser || currentUser === '') {
            $uibModal.open({
                templateUrl: '/templates/unModal.html'
                , controller: 'UnModalCtrl'
                , controllerAs: '$ctrl2'
            });
        }
    }
    angular.module('blocChat').run(['$cookies', '$uibModal', BlocChatCookies]);
})();