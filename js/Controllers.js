'use strict';

var controllers = angular.module( 'controllers' , [] );

controllers.controller( 'main' , [ '$scope' , '$timeout' , '$rootScope' , 'store' ,   function( $scope , $timeout , $rootScope, store ){

    $rootScope.points = 0;

    if (store.get('name')) {
        $scope.name = "Good luck " + store.get('name') + " !"; 
        $( ".disable" ).addClass( "disabled" );
        $( ".go" ).removeClass( "disabled" );  }
    
    $scope.accepted = function () {
        if (typeof $scope.name!=='undefined') {
          $( ".go" ).removeClass( "disabled" );
          store.set('name', $scope.name);
          $rootScope.name = $scope.name;
          $scope.name = "Good luck " + $scope.name + " !";
          $( ".disable" ).addClass( "disabled" ); 
          $( ".go" ).removeClass( "disabled" );
          $rootScope.name_correct = true;   
        }
    };

    $scope.go = function () {
        if ( store.get('name') ){
          document.getElementById("play_button").style.display="none";
          jwplayer("player").play(true); 
                /*del after*/   jwplayer("player").setVolume(0);
          $( ".answers" ).fadeIn(500);
          $( ".go" ).addClass( "disabled" );
          if ( !$rootScope.store ) {
            $rootScope.pause = $timeout(function() {
              jwplayer("player").pause(true);                
             }, $rootScope.time);
          }
          $( ".repeat" ).removeClass( "disabled" );
          $rootScope.timing = $timeout(function() {
             $rootScope.clock();               
           }, $rootScope.time);
        }

      };

     $scope.repeat = function () {
        jwplayer("player").stop(true).play(true);

          if (!$rootScope.store && !$rootScope.answered) { 

              $timeout.cancel($rootScope.pause);       
              $rootScope.pause = $timeout(function() {
                jwplayer("player").pause(true);         
               }, $rootScope.time); 
            }
     };
       $rootScope.score = function () {
         $rootScope.players =
          [{name:'John', points:3},
           {name:'Mary', points:5},
           {name:'Mike', points:2},
           {name:'Adam', points:1},
           {name:'Julie', points:0},
           {name: store.get('name'), points: store.get('points')}
           ];
           $rootScope.score = true;
       };

       $rootScope.remove = function () {
          store.remove('name');
          store.remove('points');
          store.remove('z6YwuU6V');
          store.remove('aCdhmf6d');
          store.remove('6oA6XJyw');

          $( ".disable" ).removeClass( "disabled" );
          window.location.href = './z6YwuU6V';    
       };

}]);

controllers.run( function( $timeout , $rootScope , store  ){

$rootScope.engine = function() {

      var playerInstance = jwplayer("player");
      playerInstance.setup({ 
        file: "img/" + $rootScope.movie + ".mp4",
        image: "img/image_video.jpg",
        title: "Try",
        width:692,
        height:389
      });
      if(store.get($rootScope.movie))
        $rootScope.store = true;
      else
        $rootScope.store = false;

      $( ".repeat" ).addClass( "disabled" ); 
      $rootScope.answered = false;
      document.getElementById("clock_img").src = "img/gif.gif";

      $rootScope.check = function (i) {
        if( !store.get($rootScope.movie) ) {
            var popr = $rootScope.popr;
            store.set($rootScope.movie, 'true');
            $rootScope.next = true;
            if ( i==popr) {
              $( ".anw"+i ).addClass( "list-group-item-success" );  
              $rootScope.points += 1;
              store.set('points' , $rootScope.points);
            }
            else {
              $( ".anw"+i ).addClass( "list-group-item-danger" );
            }
            $timeout(function() {       
                 $( ".anw"+popr ).addClass( "list-group-item-correct" );
              }, 1000);      
              jwplayer("player").play(true);
           }
       };
      $rootScope.cancel = function () {
        $rootScope.answered = true;
        $("#clock h5").css("font-weight" , "normal");
        $timeout.cancel($rootScope.timing);
        $timeout.cancel($rootScope.pause);
        $timeout.cancel($rootScope.timer);
        document.getElementById("clock_img").src = "img/0.png";
       };
      $rootScope.fadeout = function () {
        $rootScope.next = false;
       $( ".answers" ).fadeOut(1);
       $( ".go" ).removeClass( "disabled" );
       document.getElementById("clock").style.display = "none";
       };

       $rootScope.clock = function () {
            $rootScope.clocktime = 15;
            
            $rootScope.tick = function() {
                if(!$rootScope.answered && !store.get($rootScope.movie)) {
                    document.getElementById("clock").style.display = "block";

                    $rootScope.timer = $timeout(function() {
                            $rootScope.clocktime -= 1;
                            if ( $rootScope.clocktime <= 3)
                              $("#clock h5").css("font-weight" , "bold");
                            if ( !$rootScope.clocktime == 0)
                              $rootScope.tick(); // reset the timer
                            else {
                              document.getElementById("clock_img").src = "img/0.png";
                              store.set($rootScope.movie, 'true');
                              $rootScope.time_up = true;
                              }
                    }, 1000);

                  }
                  else
                    document.getElementById("clock_img").src = "img/0.png";
            }
            if(!$rootScope.answered)
              $rootScope.tick();

       }
    }
});


controllers.controller( 'z6YwuU6V' , [ '$rootScope'  ,  function( $rootScope ){

    
      $rootScope.a = "Shut up!";
      $rootScope.b = "Idiot....";
      $rootScope.c = "Ahh GAYYY !!!!";
      $rootScope.movie = "z6YwuU6V";
      $rootScope.time = 14000;
      $rootScope.popr = 3;
      $rootScope.after = "aCdhmf6d";

      $rootScope.engine();

}]);


controllers.controller( 'aCdhmf6d' , [ '$rootScope' ,  function( $rootScope ){

      $rootScope.a = "drown";
      $rootScope.b = "lightning";
      $rootScope.c = "upset";
      $rootScope.movie = "aCdhmf6d";
      $rootScope.time = 4000;
      $rootScope.popr = 2;
      $rootScope.after = "6oA6XJyw";

      $rootScope.engine();

}]);


controllers.controller( '6oA6XJyw' , [ '$rootScope' ,  function( $rootScope ){

      $rootScope.a = "start jumping";
      $rootScope.b = "EXPLODE !!!";
      $rootScope.c = "still working...";
      $rootScope.movie = "6oA6XJyw";
      $rootScope.time = 2800;
      $rootScope.popr = 1;
      $rootScope.after = "#";

      $rootScope.engine();

}]);




