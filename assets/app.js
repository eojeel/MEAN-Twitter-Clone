var tc = angular.module('tc', [])
tc.controller('PostCtrl', function($scope, $http) {

  $scope.addPost = function() {
    if ($scope.postBody) {
      $http.post('/api/posts', {
        username: 'dickeyxxx',
        body: $scope.postBody
      }).success(function(post) {
        $scope.posts.unshift(post)
        $scope.postBody = null
      })
    }
  }
  $http.get('/api/posts').success(function(posts) {
    $scope.posts = posts
  })
})
