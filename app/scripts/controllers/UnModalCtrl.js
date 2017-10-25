(function () {
    function UnModalCtrl($cookies, $uibModalInstance) {
        var $ctrl2 = this;
        $ctrl2.setUser = function () {
            if ($ctrl2.userName) {
                $cookies.put('blocChatCurrentUser', $ctrl2.userName);
                $uibModalInstance.close();
            }
        };
    }
    angular.module('blocChat').controller('UnModalCtrl', ['$cookies', '$uibModalInstance', UnModalCtrl]);
})();