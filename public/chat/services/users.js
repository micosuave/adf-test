angular.module('users', ['auth', 'firebase']).factory('Users', ['$firebaseArray', '$firebaseObject', 'FIREBASE_URL', function($firebaseArray, $firebaseObject, FIREBASE_URL) {
        var usersRef = new Firebase(FIREBASE_URL + 'users/');
        var users = $firebaseArray(usersRef);
        var connectedRef = new Firebase(FIREBASE_URL + '.info/connected');
        var Users = {
            getProfile: function(uid) {
                return $firebaseObject(usersRef.child(uid));
            },
            getDisplayName: function(uid) {
                return users.$getRecord(uid).displayName;
            },
            getGravatar: function(uid) {
                return '//www.gravatar.com/avatar/' + users.$getRecord(uid).emailHash;
            },
            setOnline: function(uid) {
                var connected = $firebaseObject(connectedRef);
                var online = $firebaseArray(usersRef.child(uid + '/online'));

                connected.$watch(function() {
                    if (connected.$value === true) {
                        online.$add(true).then(function(connectedRef) {
                            connectedRef.onDisconnect().remove();
                        });
                    }
                });
            },
            all: users
        };


        return Users;
    }])
    .factory('Profile', ['$firebaseObject', 'FIREBASE_URL', '$rootScope', 'auth',
        function($firebaseObject, FIREBASE_URL, $rootScope, auth) {
            return function() {
                var authData = auth.$getAuth();

                var ref = new Firebase(FIREBASE_URL + 'profiles/').child(authData.uid);

                return $firebaseObject(ref);
            };
        }
    ])
    .controller('ProfileCtrl', ['$state', 'md5', 'auth', 'Profile', function($state, md5, auth, Profile) {
        var profileCtrl = this;
        profileCtrl.profile = Profile;
        profileCtrl.updateProfile = function() {
            profileCtrl.profile.emailHash = md5.createHash(auth.password.email);
            profileCtrl.profile.$save().then(function() {
                // $state.go('channels');
            });
        };
        profileCtrl.isCollapsed = true;
        profileCtrl.open = function() {
            if ($('.chatpanel').attr('isOpen') !== true) {
                $('.chatpanel').css({
                    'transform': 'translateY(-45rem)',
                    '-webkit-transform': 'translateY(-45rem)',
                    'transition': 'all 0.75s ease-in-out'
                });
                $('.chatpanel').attr('isOpen', true);
            } else {
                $('.chatpanel').css({
                    'transform': 'translateY(45rem)',
                    '-webkit-transform': 'translateY(45rem)',
                    'transition': 'all 0.75s ease-in-out'
                });
                $('.chatpanel').attr('isOpen', false);
            }
        };
    }]);
