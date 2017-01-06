$(function() {
	$.scrollify({
			section : ".section",
			sectionName : "section-name",
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
$('.homeButton').click(function(){
	$.scrollify.move("#home");
})
$('.portfolioButton').click(function(){
	$.scrollify.move("#portfolio");
})
$('.aboutButton').click(function(){
	$.scrollify.move("#about");
})



window.onload = function(){
$('li.homeButton').addClass('active')
}


$('body').addClass('stop-scrolling')

$('body').css('background-color','black')

// $('body').css('background-color','silver')
// var image = document.images[0];
// var downloadingImage = new Image();
// downloadingImage.src = "images/beautiful.jpg";
// downloadingImage.onload = function(){
//     image.src = this.src;   
//     console.log(image.src)
// };
// $('body').css('background-image','url(images/beautiful.jpg)')


$('body').css('background-image','url(images/beautiful_smaller.jpg)')

$(window).load(function() {
	$(".loader").fadeOut("slow");
	$('.navbar').css('display','block');
	$('.email').css('display','block');
	$('.phonenum').css('display','block')
	$('body').removeClass('stop-scrolling')
})



////


var app = angular.module('myPage',['ngAnimate']);

// app.directive('backImg', function(){
//     return function(scope, element, attrs){
//         attrs.$observe('backImg', function(value) {
//             element.css({
//                 'background-image': 'url(' + value +')',
//                 'background-size' : '100% 100%',
//                 'background-repeat': 'no-repeat'

//             });
//         });
//     };
// });


app.controller('MainController', function($scope, $interval){
	window.scope=$scope
	
	
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

var aboutPage = $("#about").position().top; 
var portfolioPage = $("#portfolio").position().top; 
var homePage = $("#home").position().top; 
$(window).on("scroll", function() {
  var scrollPosition = scrollY || pageYOffset;
  if (scrollPosition === aboutPage){
  	$('.head')[0].style.display = 'block'
  	var go = setTimeout(showHead, 3500)
  	$('li.aboutButton').addClass('active')
  	$('li.homeButton').removeClass('active')
  	$('li.portfolioButton').removeClass('active')
  }
  if (scrollPosition === portfolioPage ){
  	$('li.aboutButton').removeClass('active')
  	$('li.homeButton').removeClass('active')
  	$('li.portfolioButton').addClass('active')
  }
  if (scrollPosition === homePage){
  	$('li.homeButton').addClass('active')
  	$('li.aboutButton').removeClass('active')
  	$('li.portfolioButton').removeClass('active')
  }			
});

function showHead() {
$('.head')[0].style.display = 'block'
var go = setTimeout(showHead, 5000);
}






// $('.papaya').click(function () {
//       $('#wrapper').toggleClass('toggled');
// }); 

// $('#richard').click(function () {
//       $('#wrapper').toggleClass('toggled');
// });
$('#sidebar-wrapper').hover(function () {
     $(this).stop().animate({left:"0px", opacity:1},500);     
   },function () {
       $(this).stop().animate({left: '-150px', opacity:0  },500);     
});


