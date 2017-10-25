(function () {
    function BlocChatCookies($cookies, $uibModal) {
        //$cookies.put('blocChatCurrentUser', 'Henry');
        $cookies.remove('blocChatCurrentUser');
        var currentUser = $cookies.get('blocChatCurrentUser');
        console.log(currentUser);
        if (!currentUser || currentUser === '') {
            $uibModal.open({
                templateUrl: '/templates/unModal.html'
                    //, controller: 'ModalInstanceCtrl'
                    
                , controllerAs: '$ctrl'
            })
        }
    }
    angular.module('blocChat').run(['$cookies', '$uibModal', BlocChatCookies]);
})();