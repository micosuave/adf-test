angular.module('messages', ['auth', 'firebase'])
    .factory('Messages', ['$firebaseArray', 'FIREBASE_URL', function($firebaseArray, FIREBASE_URL) {
        var channelMessagesRef = new Firebase(FIREBASE_URL + 'channelMessages');
        var userMessagesRef = new Firebase(FIREBASE_URL + 'userMessages/');

        return {
            forChannel: function(channelId) {
                return $firebaseArray(channelMessagesRef.child(channelId));
            },
            forUsers: function(uid1, uid2) {
                var path = uid1 < uid2 ? uid1 + '/' + uid2 : uid2 + '/' + uid1;
                return $firebaseArray(userMessagesRef.child(path));
            }
        };
    }])
    .directive('dmsgTab', ['$config', 'Messages', 'Profile', 'Users', '$rootScope', function($config, Messages, Profile, Users, $rootScope) {
        return {
            restrict: 'EA',
            controller: 'MessagesCtrl',
            controllerAs: 'messagesCtrl',
            bindToController: true,
            templateUrl: '/modules/common_services/directive/uxwidget/messages.html',
            // resolve: {
            //     messages: function($config, Messages, Profile) {
            //         return Messages.forUsers($config.session.uid, Profile.$id).$loaded();
            //     },
            //     channelName: function($config, Users) {
            //         return Users.all.$loaded().then(function() {
            //             return "@" + Users.getDisplayName($config.session.uid);
            //         });
            //     }
            // },

            link: function($scope, $element, $attr, $ctrl) {

                var id = $rootScope.authData.uid;
                var uid = $config(id).session.uid;

                $scope.messages = Messages.forUsers(uid, id);
                // $scope.channelName = function() {
                //     return Users.all.$loaded().then(function() {
                //         return "@" + Users.getDisplayName($config.session.uid);
                //     });
                // };
            }
        };
    }])
    .controller('MessagesCtrl', ['Profile', '$config', 'Messages', '$rootScope', '$scope', function(Profile, $config, Messages, $rootScope, $scope) {
        var messagesCtrl = this;
        var config = $config($rootScope.authData.uid);
        messagesCtrl.config = config;
        messagesCtrl.messages = Messages.forUsers($rootScope.authData.uid, messagesCtrl.config.session.uid);
        messagesCtrl.channelName = messagesCtrl.config.channelName;
        messagesCtrl.message = '';
        messagesCtrl.sendMessage = function(message) {
            if (message.length > 0) {
                $scope.messages.$add({
                    uid: $rootScope.authData.uid,
                    body: message,
                    timestamp: Firebase.ServerValue.TIMESTAMP
                }).then(function() {
                    $scope.message = '';
                });
            }
        };
        messagesCtrl.pasteAttachment = function($event) {
            if (message.length > 0) {
                $scope.messages.$add({
                    uid: $rootScope.authData.uid,
                    body: message,
                    timestamp: Firebase.ServerValue.TIMESTAMP
                }).then(function() {
                    $scope.message = '';
                });
            }
        };
    }]).directive('ffbase', ['$firebaseObject', 'FIREBASE_URL', 'Collection', '$compile', '$document', function($firebaseObject, FIREBASE_URL, Collection, $compile, $document) {
        return {
            restrict: 'A',
            replace: false,


            //templateUrl: 'modules/common_services/directive/ffbase/ffbase.html',
            link: function($scope, element, attrs, fn) {

                var item = Collection(attrs.ffbase);
                $scope.item = item;
                //$(element).addClass('card-' + item.styleClass);



            }
        };
    }]);
