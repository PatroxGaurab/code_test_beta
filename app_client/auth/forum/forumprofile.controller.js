(function() {
  
  angular
    .module('meanApp')
    .controller('forumprofileCtrl', forumprofileCtrl);

  forumprofileCtrl.$inject = ['$location','$routeParams', 'meanData'];
  function forumprofileCtrl($location, $routeParams, meanData) {
    var vm = this;

    vm.user = {};

    meanData.getForumProfile($routeParams)
      .success(function(data) {
        //vm.user = data;
	//var json_res=data;
	//alert();
	var redirect_to=data.redirect_to;
	//alert(JSON.stringify(data));
	if(data.is_verified){	
		window.location = redirect_to;
	}else{
		$scope.emailVerified = false;
	}
      })
      .error(function (e) {
        console.log(e);
      });
  }

})();
