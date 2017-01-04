$(function() {
	$.scrollify({
			section : ".section",
			sectionName : "",
			interstitialSection : "",
			easing: "easeOutExpo",
			scrollSpeed: 1100,
			offset : 0,
			scrollbars: true,
			standardScrollElements: "",
			setHeights: true,
			overflowScroll: true,
			updateHash: true,
			touchScroll:true,
			before:function() {},
			after:function() {},
			afterResize:function() {},
			afterRender:function() {}
	});
});

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
	$scope.cahootsLink = function(){
		window.open("http://cahoots.live")
	}
	$scope.alpinemicrobeLink = function(){
		window.open("http://alpinemicrobe.com/")
	}
	$scope.doomLink = function(){
		window.open("http://alpinemicrobe.com/TheEncroachingDoom/")
	}
	$scope.flyingpunchLink = function(){
		window.open("http://alpinemicrobe.com/FlyingPunch")
	}
	$scope.responsivetableLink = function(){
		window.open("http://alpinemicrobe.com/responsive_table")
	}

});

// TRANSPARENCY BAR FADE TO BLACK
var screenHeight = $(window).height()
var fadePoint = screenHeight - 50
// console.log('screen height is: '+screenHeight)
// console.log('fadePoint is: '+fadePoint)
function potatoeScroll(ev){
	// console.log(window.pageYOffset)
    if(window.pageYOffset>fadePoint)$('.navbar').css("background-color", "black")
    else $('.navbar').css("background-color", "transparent")
    
}
window.onscroll=potatoeScroll


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
