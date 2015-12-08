/*
 * The MIT License
 *
 * Copyright (c) 2014, Sebastian Sdorra
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 */

'use strict';

angular.module('adfDynamicSample', [
    'adf', 'ui.router', 'adf.structures.base',
    'adf.widget.clock', 'adf.widget.github', 'adf.widget.iframe',
    'adf.widget.linklist', 'adf.widget.markdown', 'adf.widget.news',
    'adf.widget.randommsg', 'adf.widget.version', 'adf.widget.weather',
    'adf.widget.testwidget','adf.widget.treewidget','adf.widget.getphd','adf.widget.collectionwidget','adf.widget.pagebuilderwidget','adf.widget.wysiwyg','auth0'
  ])
  .config(function($stateProvider){
    $stateProvider
      
      .state('home', {
        url: '',
        templateUrl: 'partials/default.html'
      })
      .state('boards',{
        parent: 'home',
        url: '/boards',
        views: {'@home': {controller: 'dashboardCtrl',
        controllerAs: 'dashboard',
        templateUrl: 'partials/dashboard.html'}},
        resolve: {
          data: function($stateParams, storeService, $rootScope){
            return storeService.get($rootScope.authData.id);
          }
        }
      })
      .state('board', {
        parent: 'boards',
        url: '/:id',
        views: {'@home': {controller: 'dashboardCtrl',
        controllerAs: 'dashboard',
        templateUrl: 'partials/dashboard.html'}},
        resolve: {
          data: function($stateParams, storeService){
            return storeService.get($stateParams.id);
          }
        }
      });
      
  })
  .service('storeService', function($http, $q){
    return {
      getAll: function(){
        var deferred = $q.defer();
        $http.get('./v1/store')
          .success(function(data){
            deferred.resolve(data.dashboards);
          })
          .error(function(){
            deferred.reject();
          });
        return deferred.promise;
      },
      get: function(id){
        var deferred = $q.defer();
        $http.get('./v1/store/' + id)
          .success(function(data){
            deferred.resolve(data);
          })
          .error(function(){
            deferred.reject();
          });
        return deferred.promise;
      },
      set: function(id, data){
        var deferred = $q.defer();
        $http.post('./v1/store/' + id, data)
          .success(function(data){
            deferred.resolve();
          })
          .error(function(){
            deferred.reject();
          });
        return deferred.promise;
      },
      delete: function(id){
        var deferred = $q.defer();
        $http.delete('./v1/store/' + id)
          .success(function(data){
            deferred.resolve(data);
          })
          .error(function(){
            deferred.reject();
          });
        return deferred.promise;
      }
    };
  })
  .run(
	['$rootScope',
		'$state',
		'$stateParams',
		function($rootScope,
			$state,
			$stateParams) {
			$rootScope.$state = $state;
			$rootScope.$stateParams = $stateParams;
		}
	]
)
  .controller('navigationCtrl', function($scope, $q, $location, storeService, $state, $rootScope){
    var nav = this;
    nav.navCollapsed = true;

    this.toggleNav = function(){
      nav.navCollapsed = ! nav.navCollapsed;
    };

    this.navClass = function(page) {
      var currentRoute = $location.path().substring(1);
      return page === currentRoute || new RegExp(page).test(currentRoute) ? 'active' : '';
    };

    this.create = function(){
      var id = $rootScope.authData.id + '_' + new Date().getTime();
      var q = storeService.set(id, {
        "title": "New Page",
        "structure": "4-8",
        "rows": [{
          "columns": [{
            "styleClass": "col-md-4",
            "widgets": []
          },{
            "styleClass": "col-md-8",
            "widgets": []
          }]
        }]
      });

      $q.all([q, storeService.getAll()]).then(function(values){
        nav.items = values[1];
      });
    };

    storeService.getAll().then(function(data){
      nav.items = data;
    });

    $scope.$on('navChanged', function(){
      storeService.getAll().then(function(data){
        nav.items = data;
        $state.reload();
      });
    });
  })
  .controller('dashboardCtrl', function($location, $rootScope, $scope, $stateParams, storeService, data){
    this.name = $stateParams.id;
    this.model = data;

    this.delete = function(id){
      storeService.delete(id);
      $location.path('/');
      $rootScope.$broadcast('navChanged');
    };

    $scope.$on('adfDashboardChanged', function(event, name, model) {
      storeService.set(name, model);
    });
  }).controller('LoginCtrl', ['$scope', '$http', 'auth', 'store', '$location', '$state', '$firebaseAuth', 'Auth','$rootScope', 'FIREBASE_URL', 'Profile','$config','$document',
    function ($scope, $http, auth, store, $location, $state, $firebaseAuth, Auth,$rootScope, FIREBASE_URL, Profile, $config, $document) {
        $scope.login = function () {
            auth.signin({}, function (profile, token) {
                // Success callback
                store.set('profile', profile);
                $rootScope.authData = profile;
                $rootScope.authData.uid = profile.global_client_id;
                //Profile().$save(profile);
                store.set('token', token);
                    
                var amOnline = new Firebase(FIREBASE_URL + '.info/connected');
            var userRef = new Firebase(FIREBASE_URL + 'presence/' + $rootScope.authData.uid);
            // since I can connect from multiple devices or browser tabs, we store each connection instance separately
            // any time that connectionsRef's value is null (i.e. has no children) I am offline
            var myConnectionsRef = new Firebase(FIREBASE_URL + 'profiles/' + $rootScope.authData.uid + '/connections');

            // stores the timestamp of my last disconnect (the last time I was seen online)
            var lastOnlineRef = new Firebase(FIREBASE_URL + 'profiles/' + $rootScope.authData.uid + '/lastOnline');
            var connectedRef = new Firebase(FIREBASE_URL + '.info/connected');
            var lastLoginRef = new Firebase(FIREBASE_URL + 'profiles/' + $rootScope.authData.uid + '/lastLogin');

            var connectedRef = new Firebase(FIREBASE_URL + '.info/connected');
            connectedRef.on('value', function (snap) {
                if (snap.val() === true) {
                    // We're connected (or reconnected)! Do anything here that should happen only if online (or on reconnect)

                    // add this device to my connections list
                    // this value could contain info about the device or a timestamp too
                    var con = myConnectionsRef.push(true);
                    lastLoginRef.set(Firebase.ServerValue.TIMESTAMP);

                    // when I disconnect, remove this device
                    con.onDisconnect().remove();

                    // when I disconnect, update the last time I was seen online
                    lastOnlineRef.onDisconnect().set(Firebase.ServerValue.TIMESTAMP);
                }
                $config().$bindTo($scope, 'config');
                Cursor().$bindTo($scope, 'cursor');
                angular.element('body').on('mousedown', function (event) {
                    $scope.cursor = {
                        posX: event.clientX,
                        posY: event.clientY
                    };
                    $ACTIVEROAR.scope = event;
                }).on('keydown', function (event) {
                    var x = event.which || event.keyCode;
                    if (x === 20) {
                        $rootScope.$broadcast('CAPSLOCK');
                        alertify.warning('CAPSLOCK PRESSED');
                    } else if (event.altKey === true && x !== 79) {
                        event.preventDefault();
                        $rootScope.$broadcast('ALTKEY DOWN');
                        //alertify.log("¡" + x);
                        console.log(event);
                    } else if (event.altKey === true && x === 79) {
                        $rootScope.$broadcast('OPTIONS');
                        alertify.success('OPTIONS');
                    } else if (event.altKey === true && x === 191) {
                        $rootScope.$broadcast('OPTION?');
                        alertify.success(x);
                    }
                    /* Act on the event */
                }).on('keyup', function (event) {
                    if (event.altKey === true) {
                        $rootScope.$broadcast('ALTKEY UP');
                        //toastr.success('ALTKEY UP');
                    }
                });
                // var image = angular.element('<img src="img/GoldLion.svg" width="3.5rem" height="3.5rem" style="position:absolute;left: {{cursor.posX + 20}}px; top: {{cursor.posY + 20}}px;z-index:100000;opacity:0.5;transition: 0.1s all ease-in-out;"/>');
                // var pointer = $compile(image)($scope);
                // angular.element('body').append(pointer);






            });
            amOnline.on('value', function (snapshot) {
                if (snapshot.val()) {
                    userRef.onDisconnect().remove();
                    userRef.set('★ online');
                    $document.onIdle = function () {
                        userRef.set('☆ idle');
                    };
                    $document.onAway = function () {
                        userRef.set('☄ away');
                    };
                    $document.onBack = function (isIdle, isAway) {
                        userRef.set('★ online');
                    };

                }
            });


                $state.go('home', { groupId: $rootScope.authData.uid });
                // $scope.authObj.$authWithCustomToken(token, function (err, authData) {
                //      if (err) {
                //          alertify.alert(err);
                // } else {
                //     $rootScope.authData = authData;
                //     $state.go('home', { groupId: authData.uid });
                // }
                // //$location.path('/');
                // });
               
            }, function () {
                // Error callback
            });
        };
        $scope.auth = Auth;

        var ref = new Firebase(FIREBASE_URL);

        $scope.authObj = $firebaseAuth(ref);

        var authData = $scope.authObj.$getAuth();
        


            
        
    

}]);
