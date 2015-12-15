angular.module('content', ['firebase','auth']).factory('Matter', ['$firebaseObject', 'FIREBASE_URL',
        function($firebaseObject, FIREBASE_URL) {
            return function(matterId, groupId) {


                var ref = new Firebase(FIREBASE_URL + 'matters/' + groupId + '/children/').child(matterId);
                return $firebaseObject(ref);
            };
        }
    ])
.factory('Collection', ['$firebaseObject', 'FIREBASE_URL', function($firebaseObject, FIREBASE_URL) {
        return function(roarId) {

            var ref = new Firebase(FIREBASE_URL + 'content/').child(roarId);
            return $firebaseObject(ref);
        };
    }]);