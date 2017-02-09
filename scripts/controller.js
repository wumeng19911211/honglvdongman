angular.module('Ctrls', [])
    //主页
    .controller('MainCtrl', ['$scope','$rootScope', '$http', function($scope,$rootScope, $http) {
        $rootScope.title='红旅动漫';
        //轮播图
        $http({
            method: 'get',
            url: 'http://182.254.146.100:9090/api/getlunbo',
            data: null
        }).success(function(data, status, headers, config) {
            console.log(data);
            $scope.bannerinfo = data;
        })

        //点击时切换数据
        $('.tab-title li').on('click', function() {
        		$(this).addClass('active').siblings().removeClass('active');
                var type = $(this).index() + 1;
                $http({
                    method: 'get',
                    url: 'http://182.254.146.100:9090/api/gethometab/' + type,
                    data: null
                }).success(function(data, status, headers, config) {
                    console.log(data)
                    $scope.animateinfo = data;
                })

            })
            //初始化页面
        $http({
            method: 'get',
            url: 'http://182.254.146.100:9090/api/gethometab/1',
            data: null
        }).success(function(data, status, headers, config) {
            console.log(data)
            $scope.animateinfo = data;
        })

    }])

	//连载动漫
	.controller('LianzaiCtrl',['$scope','$rootScope','$http',function($scope,$rootScope,$http){
		$rootScope.title='连载动漫';
		$http({
			method:'get',
			url:'http://182.254.146.100:9090/api/getlianzai',
			data:null
		}).success(function(data){
			console.log(data);
			$scope.info=data;
		})
	}])


	//专题列表
	.controller('TopicCtrl',['$scope','$rootScope','$http',function($scope,$rootScope,$http){
		$rootScope.title='专题列表';
		$http({
			method:'get',
			url:'http://182.254.146.100:9090/api/gettopics',
			data:null
		}).success(function(data){
			console.log(data);
			$scope.info=data;
		})
	}])