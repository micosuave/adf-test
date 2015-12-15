angular.module('channels', ['auth', 'firebase'])
    .factory('Channels', ['$firebaseArray', 'FIREBASE_URL', function($firebaseArray, FIREBASE_URL) {
        var ref = new Firebase(FIREBASE_URL + 'channels/');
        var channels = $firebaseArray(ref);

        return channels;
    }]).filter('trustAsHTML', ['$sce', function($sce) {
        return function(text) {
            return $sce.trustAsHtml(text);
        };
    }])
    .directive('chatPanel', [function() {
        return {
            replace: false,
            controller: 'ProfileCtrl',
            controllerAs: 'profileCtrl',
            bindToController: true,
            templateUrl: '/modules/common_services/directive/uxwidget/chatpanel.html',
            restrict: 'E',
            resolve: {
                messages: function($config, Messages) {
                    return Messages.forChannel($config.session.channelId).$loaded();
                },
                channelName: function($config, channels) {
                    return '#' + channels.$getRecord($config.session.channelId).name;
                },
                channels: function(Channels) {
                    return Channels.$loaded();
                },
                profile: function($state, auth, Users) {
                    return auth.$requireAuth().then(function(auth) {
                        return Users.getProfile(auth.uid).$loaded().then(function(profile) {
                            if (profile.displayName) {
                                return profile;
                            } else {
                                //$state.go('profile');
                            }
                        });
                    }, function(error) {
                        //$state.go('home');
                    });
                }
            },


            link: function($scope, $element, $attr, $ctrl) {

            }
        };
    }])

.directive('channelsTab', ['Channels', '$state', 'auth', 'Users', '$config', function(Channels, $state, auth, Users, $config) {
        return {
            restrict: 'EA',
            controller: 'ChannelsCtrl',
            controllerAs: 'channelsCtrl',
            bindToController: true,
            templateUrl: '/modules/common_services/directive/uxwidget/side.html',
            resolve: {
                channels: function(Channels) {
                    return Channels.$loaded();
                },
                profile: function($state, auth, Users) {
                    return auth.$requireAuth().then(function(auth) {
                        return Users.getProfile(auth.uid).$loaded().then(function(profile) {
                            if (profile.displayName) {
                                return profile;
                            } else {
                                // $state.go('profile');
                            }
                        });
                    }, function(error) {
                        // $state.go('home');
                    });
                }
            },
            link: function($scope, $element, $attr, $ctrl) {

            }
        };
    }])
    .controller('ChannelsCtrl', ['$stateParams', 'auth', 'Users', 'Profile', 'Channels', '$scope', 'Messages', '$rootScope', '$parse', '$log', '$sce', 'Collection', 'Matter', '$compile', function($stateParams, auth, Users, Profile, Channels, $scope, Messages, $rootScope, $parse, $log, $sce, Collection, Matter, $compile) {
        var channelsCtrl = this;




        function hi() {
            var a = auth.$getAuth();
            if (a) {
                $scope.authData = a;
                channelsCtrl.self = a.uid;
            } else {

            }


        };
        hi();
        channelsCtrl.profile = Profile();
        channelsCtrl.channels = Channels;
        channelsCtrl.getDisplayName = Users.getDisplayName;
        channelsCtrl.getGravatar = Users.getGravatar;

        channelsCtrl.sce = $sce;
        channelsCtrl.logout = function() {
            channelsCtrl.profile.online = null;
            channelsCtrl.profile.$save().then(function() {
                auth.$unauth();
                //$state.go('home');


            });


        };
        channelsCtrl.importAttachment = function(attachmentID) {
            Matter($stateParams.matterId, $stateParams.groupId).$loaded().then(function(matter) {
                if (angular.isUndefined(matter.importlist)) {
                    matter.importlist = new Array();
                    matter.importlist.push(attachmentID);
                    matter.$save();
                } else {
                    matter.importlist.push(attachmentID);
                    matter.$save();
                }
            });
        };
        channelsCtrl.sendMessage = function(message) {
            if (message.text.length > 0) {
                $scope.messages.$add({
                    uid: $rootScope.authData.uid,
                    body: message.text,
                    attachment: message.attachment || null,
                    timestamp: Firebase.ServerValue.TIMESTAMP
                }).then(function() {
                    $scope.message = '';
                });
            }
        };
        channelsCtrl.pasteAttachment = function(message, $event) {

            console.log($event.target.value);

            // if (message.text.length > 0) {
            //     $scope.messages.$add({
            //         uid: $rootScope.authData.uid,
            //         body: message.text,
            //         attachment: $event.clipboarddata,
            //         timestamp: Firebase.ServerValue.TIMESTAMP
            //     }).then(function() {
            //         $scope.message = '';
            //     });
            // }
        };
        channelsCtrl.show = function(eventId) {
            Collection(eventId).$loaded().then(function(event) {
                if (event.document_type !== 'html') {
                    var divpanel = angular.element('<div/>').attr('class', 'issuedocpanel stacker');
                    var header = angular.element('<h4 class="splash">' + event.rid + ' - ' + event.name + '<span class="fa fa-close btn btn-xs btn-danger" style="float: right;" onclick="$(this).parent().parent().remove()"></span></h4><h6>' + event.media + '</h6>');
                    var skope = angular.element('<iframe/>').attr('src', event.media);

                    angular.element('body').append($compile(divpanel.append(header).append(skope))($scope));
                    $('.issuedocpanel').draggable({
                        stack: '.stacker',
                        handle: 'h4'
                    }).resizable();
                } else {
                    var divpanel = angular.element('<div/>').attr('class', 'issuedocpanel stacker');
                    var header = angular.element('<h4 class="splash">' + event.rid + ' - ' + event.name + '<span class="fa fa-close btn btn-xs btn-danger" style="float: right;" onclick="$(this).parent().parent().remove()"></span></h4><h6>' + event.media + '</h6>');
                    //var skope = angular.element('<iframe/>').attr('srcdoc', ('<!DOCTYPE html><html><head><link rel="stylesheet" href="//leo.lexlab.io/app.full.min.css"><script src="http://micoff.local:8000/start.js"></script><script src="//leo.lexlab.io/app.full.min.js"></script></head><body><div class="card card-default">' + angular.fromJson(event.content)));
                    var skope = angular.element('<iframe/>').attr('srcdoc', ('<!DOCTYPE html><html><head></head><body><div class="card card-default">' + angular.fromJson(event.content) + '</div></body></html>'));

                    angular.element('body').append($compile(divpanel.append(header).append(skope))($scope));
                    $('.issuedocpanel').draggable({
                        stack: '.stacker',
                        handle: 'h4'
                    }).resizable();
                }

            });


        };
        $scope.main = {};
        $scope.main.handleFiles = function(file) {
            extractpdf(file.files[0])
                .then(function(files) {
                    channelsCtrl.message = files;
                    console.log(files);
                    extractapdf(files);
                });
        };
        channelsCtrl.activate = function(id) {

            var messages = Messages.forChannel(id);
            channelsCtrl.currentChannel = channelsCtrl.channels.$getRecord(id);
            $scope.messages = messages;

        };
        channelsCtrl.activateDM = function(id) {
            channelsCtrl.currentChannel = {};
            var messages = Messages.forUsers(channelsCtrl.self, id);
            channelsCtrl.currentChannel.name = channelsCtrl.getDisplayName(id);
            $scope.messages = messages;
        };
        channelsCtrl.newChannel = {
            name: ''
        };
        channelsCtrl.create = function() {
            channelsCtrl.channels.$add(channelsCtrl.newChannel).then(function(ref) {
                channelsCtrl.newChannel = {
                    name: ''
                };
            });
        };
        channelsCtrl.includeAttachment = function() {
            alertify.prompt('What do you want to add?').then(function(resp) {
                var messagetext = '{{channelsCtrl.getDisplayName(message.uid)}} added';
                var attachment = $parse(resp);
                console.log(attachment);
                alertify.log(attachment);
                $log.info(attachment);

            });
        };
        channelsCtrl.format = {
            'red': /\d+/g,
            '#00ff00': /@[a-z0-9]/ig,
            'rgba(0,0,1,0.5)': 'hello'
        };
        channelsCtrl.list = function(input) {
            console.log(input);
        };
        channelsCtrl.users = Users.all;
        Users.setOnline(channelsCtrl.self);

    }])
    .directive('channelTab', ['$config', 'Messages', 'Channels', function($config, Messages, Channels) {
        return {
            restrict: 'EA',
            controller: 'MessagesCtrl',
            controllerAs: 'messagesCtrl',
            bindToController: true,
            templateUrl: '/modules/common_services/directive/uxwidget/messages.html',
            resolve: {
                messages: function($config, Messages) {
                    return Messages.forChannel($config.session.channelId).$loaded();
                },
                channelName: function($config, Channels) {
                    return '#' + Channels.$getRecord($config.session.channelId).name;
                }
            }
        }
    }])
    .factory('extractapdf', function() {
        return function(files) {
            var pdf = files.pdffiles['13550210/13550210-image_file_wrapper/13550210-2012-07-16-00013-WFEE.pdf'];
            console.log(pdf);
            window.pdf = pdf;
            var pdfa = PDFJS.PDFDataRangeTransport(pdf.asUint8Array().length, pdf.asUint8Array());

            console.log(pdfa);
        }
    });
