var Hldm = angular.module('Hldm', ['ngRoute','Ctrls']);

Hldm.run(['$rootScope', function($rootScope) {
    $rootScope.collapsed = false;
    $rootScope.hidden=false;
    $rootScope.title='红旅动漫';

    $rootScope.toggle = function() {
    	var navs= $('.navs')[0];
    	var navswidth=$(navs).width();
    	var container= $('.container')[0];
    	var mask=$('.mask')[0];
    	console.log(navswidth);

        $rootScope.callapsed = !$rootScope.callapsed;
        $rootScope.hidden=!$rootScope.hidden;

        if ($rootScope.callapsed) {
            navs.style.transform = 'translate(0)';
            navs.style.transitionDuration = '0.5s';
            container.style.transform = 'translate('+navswidth+'px)';
            container.style.transitionDuration = '0.5s';
        }else{
        	navs.style.transform = 'translate(-100%)';
            navs.style.transitionDuration = '0.5s';
            container.style.transform = 'translate(0)';
            container.style.transitionDuration = '0.5s';
        }

        if($rootScope.hidden){
        	mask.style.display='block';
        }else{
        	mask.style.display='none';
        }

    }

}])

// 配置路由
Hldm.config(['$routeProvider', function ($routeProvider) {

	$routeProvider.when('/main', {
		// 充当就是视图
		templateUrl: './views/main.html',
		controller: 'MainCtrl'
	}).when('/lianzai', {
		templateUrl: './views/lianzai.html',
		controller: 'LianzaiCtrl'
	}).when('/topic', {
		templateUrl: './views/topic.html',
		controller: 'TopicCtrl'
	}).otherwise({
		redirectTo: '/main'
	});
}]);


