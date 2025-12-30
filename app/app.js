'use strict';

angular.module('ethExplorer', ['ngRoute','ui.bootstrap'])

.config(['$routeProvider',
    function($routeProvider) {
        $routeProvider.
            when('/', {
                templateUrl: 'views/main.html',
                controller: 'mainCtrl'
            }).
            when('/block/:blockId', {
                templateUrl: 'views/blockInfos.html',
                controller: 'blockInfosCtrl'
            }).
            when('/transaction/:transactionId', {
                templateUrl: 'views/transactionInfos.html',
                controller: 'transactionInfosCtrl'
            }).
            when('/address/:addressId', {
                templateUrl: 'views/addressInfo.html',
                controller: 'addressInfoCtrl'
            }).
            otherwise({
                redirectTo: '/'
            });
    }])
    .run(function($rootScope) {
        var web3 = new Web3();
        var eth_node_url = 'http://localhost:8545'; // TODO: remote URL
        console.log("=== 张舒扬实训项目启动 ===");
        console.log("正在尝试连接本地以太坊节点: " + eth_node_url);
	web3.setProvider(new web3.providers.HttpProvider(eth_node_url));
        $rootScope.web3 = web3;
        if(web3.isConnected()) {
            // 获取连接到的节点数量（即你的 Team 成员数）
            $rootScope.peerCount = web3.net.peerCount;
            
            // 如果你想显示具体是谁，可以尝试获取节点 ID（需要 admin 权限）
            try {
                $rootScope.nodeInfo = web3.admin.nodeInfo;
                console.log("我的节点 ID: " + $rootScope.nodeInfo.id);
            } catch(e) {
                console.log("无法获取详细 Peer 信息，请确保 Geth 开启了 admin API");
            }
        }
        
        $rootScope.startTime = new Date().toLocaleString();

        if(!web3.isConnected()) {
            console.error("[错误] 无法连接到节点。请检查：1.Geth是否启动 2.是否开启了 --http.corsdomain '*' ");
            $('#connectwarning').modal({keyboard:false,backdrop:'static'}) 
            $('#connectwarning').modal('show') 
        } else {
            console.log("[成功] 已成功连接至以太坊区块链节点。");
            console.log("系统启动时间: " + $rootScope.startTime);
        }

        function sleepFor( sleepDuration ){
            var now = new Date().getTime();
            while(new Date().getTime() < now + sleepDuration){ /* do nothing */ } 
        }
        var connected = false;
        if(!web3.isConnected()) {
            $('#connectwarning').modal({keyboard:false,backdrop:'static'}) 
            $('#connectwarning').modal('show') 
        }
    });
