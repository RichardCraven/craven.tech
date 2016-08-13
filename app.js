var app = angular.module('myPage',['ngAnimate']);
// ,'ui.bootstrap'
app.directive('backImg', function(){
    return function(scope, element, attrs){
        attrs.$observe('backImg', function(value) {
            element.css({
                'background-image': 'url(' + value +')',
                'background-size' : '100% 100%',
                'background-repeat': 'repeat-y'

            });
        });
    };
});

app.controller('MainController', function($scope, $interval){
	window.scope=$scope
	$scope.showMain = true;
	$scope.showPortfolio = false;
	$scope.showResume = false;
	
	$scope.homeClick = function(){
		$scope.showMain = true;
		$scope.showPortfolio = false;
		$scope.showResume = false;
	}
	$scope.portfolioClick = function(){
		$scope.showMain = false;
		$scope.showPortfolio = true;
		$scope.showResume = false;
	}
	$scope.resumeClick = function(){
		$scope.showMain = false;
		$scope.showPortfolio = false;
		$scope.showResume = true;
	}


});

$('.showHead').click(function(){
	function showHead() {
	$('.head')[0].style.display = 'block'
	}
	var go = setTimeout(showHead, 5000);
})

$('.papaya').click(function () {
      $('#wrapper').toggleClass('toggled');
}); 

$('#richard').click(function () {
      $('#wrapper').toggleClass('toggled');
});
// $('.mouseOverDiv').mouseenter(function(){
// 	if (!$('#wrapper').hasClass('toggled')){
// 	    $('#wrapper').addClass("toggled")
// 	}
// 	$('.mouseOverDiv').unbind('mouseenter')
// })
// $('.mouseOverDiv').mouseleave(function(){
// 	// if ($('#wrapper').hasClass('toggled')){		
// 	$('#wrapper').toggleClass('toggled')
// 	// }
// })
$('#sidebar-wrapper').hover(function () {
     $(this).stop().animate({left:"0px", opacity:1},500);     
   },function () {
       $(this).stop().animate({left: '-150px', opacity:0  },500);     
});
// $('#richard').click(function () {
// 	if($('#wrapper').style.opacity = 0){
// 	$('#wrapper').stop().animate({left:"0px", opacity:1},500);
// 	}
//     else {     
//     $('#wrapper').stop().animate({left: '-150px', opacity:0  },500);  
//     }   
// });







// $('.btn').click(function() {
//     $('.modal')
//         .prop('class', 'modal fade') // revert to default
//         .addClass( $(this).data('direction') );
//     $('.modal').modal('show');
// });

// $(function(){
// $('.demo div').inview();
// });

// $(function(){
// $('.demo div').inview({
// 'viewFactor': 0.3,
// 'onEnter': function($object) {
// },
// 'onLeave': function($object) {
// }
// });
// });
