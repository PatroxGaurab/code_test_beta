(function () {

  angular
    .module('meanApp')
    .controller('navigationCtrl', navigationCtrl);

  navigationCtrl.$inject = ['$location','authentication','meanData','$routeParams'];
  function navigationCtrl($location, authentication,meanData,$routeParams) {
    var vm = this;

    vm.isLoggedIn = authentication.isLoggedIn();

    vm.currentUser = authentication.currentUser();

    meanData.getProfile($routeParams)
      .success(function(data) {
       vm.profilepic=data.profilepic;
    });
  }

})();
