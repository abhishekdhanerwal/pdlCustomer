angular.module('starter.controllers', [])

.controller('DashCtrl', function($scope , $http) {
  activate();
  function activate(){
    $scope.progress = true;
    $scope.currentDate = new Date();
    var currentDate = $scope.currentDate.getDate()+'-'+ ($scope.currentDate.getMonth()+1) +'-'+$scope.currentDate.getFullYear();

    $http.get('http://ec2-13-232-169-227.ap-south-1.compute.amazonaws.com:8080/getTokens?date='+currentDate)
      .then(
      function (response) {
        if(response.data.data.length == 0){
          $scope.currentDayTokens = [
            {
              time:'12:00 AM',
              key:null
            },
            {
              time:'12:15 AM',
              key:null
            },
            {
              time:'12:30 AM',
              key:null
            },
            {
              time:'12:45 AM',
              key:null
            },
            {
              time:'01:00 AM',
              key:null
            },
            {
              time:'01:15 AM',
              key:null
            },
            {
              time:'01:30 AM',
              key:null
            },
            {
              time:'01:45 AM',
              key:null
            },
            {
              time:'02:00 AM',
              key:null
            },
            {
              time:'02:15 AM',
              key:null
            },
            {
              time:'02:30 AM',
              key:null
            },
            {
              time:'02:45 AM',
              key:null
            },
            {
              time:'03:00 AM',
              key:null
            },
            {
              time:'03:15 AM',
              key:null
            },
            {
              time:'03:30 AM',
              key:null
            },
            {
              time:'03:45 AM',
              key:null
            },
            {
              time:'04:00 AM',
              key:null
            },
            {
              time:'04:15 AM',
              key:null
            },
            {
              time:'04:30 AM',
              key:null
            },
            {
              time:'04:45 AM',
              key:null
            },
            {
              time:'05:00 AM',
              key:null
            },
            {
              time:'05:15 AM',
              key:null
            },
            {
              time:'05:30 AM',
              key:null
            },
            {
              time:'05:45 AM',
              key:null
            },
            {
              time:'06:00 AM',
              key:null
            },
            {
              time:'06:15 AM',
              key:null
            },
            {
              time:'06:30 AM',
              key:null
            },
            {
              time:'06:45 AM',
              key:null
            },
            {
              time:'07:00 AM',
              key:null
            },
            {
              time:'07:15 AM',
              key:null
            },
            {
              time:'07:30 AM',
              key:null
            },
            {
              time:'07:45 AM',
              key:null
            },
            {
              time:'08:00 AM',
              key:null
            },
            {
              time:'08:15 AM',
              key:null
            },
            {
              time:'08:30 AM',
              key:null
            },
            {
              time:'08:45 AM',
              key:null
            },
            {
              time:'09:00 AM',
              key:null
            },
            {
              time:'09:15 AM',
              key:null
            },
            {
              time:'09:30 AM',
              key:null
            },
            {
              time:'09:45 AM',
              key:null
            },
            {
              time:'10:00 AM',
              key:null
            },
            {
              time:'10:15 AM',
              key:null
            },
            {
              time:'10:30 AM',
              key:null
            },
            {
              time:'10:45 AM',
              key:null
            },
            {
              time:'11:00 AM',
              key:null
            },
            {
              time:'11:15 AM',
              key:null
            },
            {
              time:'11:30 AM',
              key:null
            },
            {
              time:'11:45 AM',
              key:null
            },

            {
              time:'12:00 PM',
              key:null
            },
            {
              time:'12:15 PM',
              key:null
            },
            {
              time:'12:30 PM',
              key:null
            },
            {
              time:'12:45 PM',
              key:null
            },
            {
              time:'01:00 PM',
              key:null
            },
            {
              time:'01:15 PM',
              key:null
            },
            {
              time:'01:30 PM',
              key:null
            },
            {
              time:'01:45 PM',
              key:null
            },
            {
              time:'02:00 PM',
              key:null
            },
            {
              time:'02:15 PM',
              key:null
            },
            {
              time:'02:30 PM',
              key:null
            },
            {
              time:'02:45 PM',
              key:null
            },
            {
              time:'03:00 PM',
              key:null
            },
            {
              time:'03:15 PM',
              key:null
            },
            {
              time:'03:30 PM',
              key:null
            },
            {
              time:'03:45 PM',
              key:null
            },
            {
              time:'04:00 PM',
              key:null
            },
            {
              time:'04:15 PM',
              key:null
            },
            {
              time:'04:30 PM',
              key:null
            },
            {
              time:'04:45 PM',
              key:null
            },
            {
              time:'05:00 PM',
              key:null
            },
            {
              time:'05:15 PM',
              key:null
            },
            {
              time:'05:30 PM',
              key:null
            },
            {
              time:'05:45 PM',
              key:null
            },
            {
              time:'06:00 PM',
              key:null
            },
            {
              time:'06:15 PM',
              key:null
            },
            {
              time:'06:30 PM',
              key:null
            },
            {
              time:'06:45 PM',
              key:null
            },
            {
              time:'07:00 PM',
              key:null
            },
            {
              time:'07:15 PM',
              key:null
            },
            {
              time:'07:30 PM',
              key:null
            },
            {
              time:'07:45 PM',
              key:null
            },
            {
              time:'08:00 PM',
              key:null
            },
            {
              time:'08:15 PM',
              key:null
            },
            {
              time:'08:30 PM',
              key:null
            },
            {
              time:'08:45 PM',
              key:null
            },
            {
              time:'09:00 PM',
              key:null
            },
            {
              time:'09:15 PM',
              key:null
            },
            {
              time:'09:30 PM',
              key:null
            },
            {
              time:'09:45 PM',
              key:null
            },
            {
              time:'10:00 PM',
              key:null
            },
            {
              time:'10:15 PM',
              key:null
            },
            {
              time:'10:30 PM',
              key:null
            },
            {
              time:'10:45 PM',
              key:null
            },
            {
              time:'11:00 PM',
              key:null
            },
            {
              time:'11:15 PM',
              key:null
            },
            {
              time:'11:30 PM',
              key:null
            },
            {
              time:'11:45 PM',
              key:null
            },
          ]
        }
        else {          
          $scope.currentDayTokens = response.data.data[0].token;
        }
       

        for(var index=0; index<$scope.currentDayTokens.length ; index++){
          var getDBtime = $scope.currentDayTokens[index].time.split(" ");
          var getDBhrMin = getDBtime[0].split(":");
          if(getDBtime[1] == 'PM'){
            if(getDBhrMin[0] != 12)
              getDBhrMin[0] = parseInt(getDBhrMin[0]) + 12;
          }
          else{
            if(getDBhrMin[0] == 12)
              getDBhrMin[0] = 0;
          }

          if($scope.currentDayTokens[index].key == null){
            if(getDBhrMin[0] < $scope.currentDate.getHours())
            $scope.currentDayTokens[index].key = "-";
          else if (getDBhrMin[0] == $scope.currentDate.getHours()){
            if(getDBhrMin[1] < $scope.currentDate.getMinutes())
              $scope.currentDayTokens[index].key = "-";
            else
              $scope.currentDayTokens[index].key = "Result Pending";
          }
          else
          $scope.currentDayTokens[index].key = "Result Pending";
          }
        }
        $scope.progress = false;      },
      function (error) {
        $scope.progress = false; 
      });
  }

  $scope.refreshData = function(){
    activate();
  }
})
