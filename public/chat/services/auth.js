angular.module('auth', ['firebase'])
    .value('FIREBASE_URL', 'https://lexlab.firebaseio.com/')
    .factory('auth', ['$firebaseAuth', 'FIREBASE_URL', function($firebaseAuth, FIREBASE_URL) {
        var ref = new Firebase(FIREBASE_URL);
        var auth = $firebaseAuth(ref);
        return auth;
    }])
    .controller('LoginCtrl', ['auth', '$rootScope', 'toastr', '$scope', 'FIREBASE_URL', function(auth, $rootScope, toastr, $scope, FIREBASE_URL) {
        var login = this;
        var authData = auth.$getAuth();

        if (authData) {
            $scope.authData = authData;
            $rootScope.authData = authData;
            toastr.info('Logged in as ' + authData.password.email, 'Connected!');

        }

        var amOnline = new Firebase(FIREBASE_URL + '.info/connected');
        var userRef = new Firebase(FIREBASE_URL + 'presence/' + authData.uid);
        // since I can connect from multiple devices or browser tabs, we store each connection instance separately
        // any time that connectionsRef's value is null (i.e. has no children) I am offline
        var myConnectionsRef = new Firebase(FIREBASE_URL + 'profiles/' + authData.uid + '/connections');

        // stores the timestamp of my last disconnect (the last time I was seen online)
        var lastOnlineRef = new Firebase(FIREBASE_URL + 'profiles/' + authData.uid + '/lastOnline');
        var connectedRef = new Firebase(FIREBASE_URL + '.info/connected');
        var lastLoginRef = new Firebase(FIREBASE_URL + 'profiles/' + authData.uid + '/lastLogin');

        var connectedRef = new Firebase(FIREBASE_URL + '.info/connected');
        connectedRef.on('value', function(snap) {
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
        });
        login.login = function() {
            auth.authWithPassword({
                email: login.email,
                password: login.password
            }, function(error, authData) {
                if (error === null) {
                    // user authenticated with Firebase
                    console.log("User ID: " + authData.uid + ", Provider: " + authData.provider);
                    toastr.success(authData.password.email, 'Authentication successful!', {
                        //iconClass: 'rlabel Applicant rounded'
                    });

                    $scope.authData = authData;
                    $rootScope.authData = authData;
                    var amOnline = new Firebase(FIREBASE_URL + '.info/connected');
                    var userRef = new Firebase(FIREBASE_URL + 'presence/' + authData.uid);
                    // since I can connect from multiple devices or browser tabs, we store each connection instance separately
                    // any time that connectionsRef's value is null (i.e. has no children) I am offline
                    var myConnectionsRef = new Firebase(FIREBASE_URL + 'profiles/' + authData.uid + '/connections');

                    // stores the timestamp of my last disconnect (the last time I was seen online)
                    var lastOnlineRef = new Firebase(FIREBASE_URL + 'profiles/' + authData.uid + '/lastOnline');
                    var connectedRef = new Firebase(FIREBASE_URL + '.info/connected');
                    var lastLoginRef = new Firebase(FIREBASE_URL + 'profiles/' + authData.uid + '/lastLogin');

                    var connectedRef = new Firebase(FIREBASE_URL + '.info/connected');
                    connectedRef.on('value', function(snap) {
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
                    });
                    amOnline.on('value', function(snapshot) {
                        if (snapshot.val()) {
                            userRef.onDisconnect().remove();
                            userRef.set('★ online');
                            $document.onIdle = function() {
                                userRef.set('☆ idle');
                            };
                            $document.onAway = function() {
                                userRef.set('☄ away');
                            };
                            $document.onBack = function(isIdle, isAway) {
                                userRef.set('★ online');
                            };

                        }
                    });
                }
            });
        };
    }])
    .directive('authPanel', [function() {
        return {
            replace: false,
            restrict: 'EA',
            template: '<div class="loginform" > <h3><strong>Welcome, please log in</strong></h3> <form id="loginForm" name="loginForm" ng-submit="login.login()"> <formgroup class="emailgroup"> Email <input class="form-control" type="email" name="email" ng-model="login.email" required/> </formgroup> <formgroup class="passwordgroup"> Password <input class="form-control" type="password" name="password" ng-model="login.password" required/> </formgroup> <br /> <div class="row"> <div class="col-xs-15"> <small><span ng-dialog="resetPassword.html" ng-dialog-class="ngdialog-theme-default" ng-dialog-controller="PasswordController" style="color:steelblue;" class="forgotpassword">Forgot password?</span> </small> <br><small class="" style="color:#444;">(<span ng-dialog="register.html" ng-dialog-class="ngdialog-theme-default" ng-dialog-controller="RegistrationController" style="color:steelblue;" class="register">Register</span>)</small> </div> <div class="col-xs-15"> <button id="submitBtn" class="btn btn-primary pull-right" type="submit" ng-click="login.login()">Log in</button> </div> </div> </form> <h6 class="pull-right">A Smart Office for Lawyers, Everywhere.&#8480</h6> </div>',
            controller: 'LoginCtrl',
            controllerAs: 'login',
            bindToController: true,
            resolve: {
                authData: ['auth', '$rootScope', function(auth, $rootScope) {
                    return auth.$getAuth();
                }]
            },
            link: function($scope, $element, $attr, login) {

            }
        };
    }]);
