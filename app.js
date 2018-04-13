$(function() {
console.log(this)

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

var typewriter = function(string, interval) {
  var interval = interval || 100;
  var index = 0;
  var typewriterMessage = setInterval(function(){ 
  	$('#mainText').text(string.slice(0, index))
  	index++
  	if(index > string.length){
  		clearInterval(typewriterMessage);
  	};
  }, interval);
};

$(window).load(function() {
	$(".loader").fadeOut("slow");
	$('.navbar').css('display','block');
	$('.email').css('display','block');
	$('.phonenum').css('display','block')
	$('body').removeClass('stop-scrolling')
})

window.onload = function(){
 var timer = setTimeout( function(){
 	$('.mainDiv').css('opacity',1)
	 typewriter('DESIGNER', 40);
	 $('#sidebar-wrapper').stop().animate({left:"0px", opacity:1},500); 
	 var timer2 = setTimeout(function(){
	 	typewriter('MUSICIAN', 40);
	 },1000);
	 var timer3 = setTimeout(function(){
	 	typewriter('FUTURIST', 40);
	 },1900);
	 var timer4 = setTimeout(function(){
	 	typewriter('DEVELOPER', 40);
	 },2800);
	 var timer5 = setTimeout(function(){
	 	$('.mainDiv').css('background-color', 'black');
	 	$('.mainDiv').css('opacity', 0.5);
	 	var timer6 = setTimeout(function(){dots()},1000);
	 },3100);
     // var hide = setTimeout( function(){
 	   //  $('#sidebar-wrapper').stop().animate({left: '-150px', opacity:0},500);
     // }, 3000);
 }, 500);
};

var dots = function(){
	$('#dot1').css('opacity','1')
	var dotTimer1 = setTimeout(function (){
		$('#dot2').css('opacity','1')
	},50);
	var dotTimer2 = setTimeout(function (){
		$('#dot3').css('opacity','1')
	},100);
	var dotTimer3 = setTimeout(function (){
		$('#dot4').css('opacity','1')
	},150);
	var dotTimer4 = setTimeout(function (){
		$('#dot5').css('opacity','1')
	},200);
	var dotTimer5 = setTimeout(function (){
		$('#dot1').css('opacity','0')
	},500);
	var dotTimer6 = setTimeout(function (){
		$('#dot2').css('opacity','0')
	},550);
	var dotTimer7 = setTimeout(function (){
		$('#dot2').css('opacity','0')
	},600);
	var dotTimer8 = setTimeout(function (){
		$('#dot3').css('opacity','0')
	},650);
	var dotTimer9 = setTimeout(function (){
		$('#dot4').css('opacity','0')
	},700);
	var dotTimer10 = setTimeout(function (){
		$('#dot5').css('opacity','0')
	},750);
};

// $('.sidebar-nav li').on( "mouseEnter", function(){
// 	console.log('mouseEntered')
// });






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


$('body').css('background-image','url(images/beautiful.jpg)')





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


app.controller('MainController', function($scope, $interval, $timeout){
	window.scope=$scope
	
	var firstRow = $('.firstRow');
	console.log('first row is ', firstRow[0].offsetHeight)
	$scope.firstRowHeight = firstRow[0].offsetHeight;

	$scope.showPortfolio = true;
	$scope.showHiddenPortfolio = false;

	$scope.previewTypewriter = function(type, string, interval) {
	  var interval = interval || 100;
	  var index = 0;

	  var el = type + 'Text';
	  $('#'+el).html = '';
	  $scope.previewTypewriterMessage = setInterval(function(){ 
	  	$('#'+el).html(string.slice(0, index))
	  	index++
	  	if(index > string.length){
	  		clearInterval($scope.previewTypewriterMessage);
	  	};
	  }, interval);
	};
	$scope.mobiusLink = function(){
		window.open("http://mobiusdimension.io")
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
	$scope.dannaBreenDesignLink = function(){
		window.open("http://dannabreendesign.com/")
	}
	$scope.mock1Link = function(){
		window.open("http://craven.tech/mockup1")
	}
	$scope.mock2Link = function(){
		window.open("http://craven.tech/mockup2")
	}
	$scope.ptolemyLink = function(){
		window.open("https://soundcloud.com/ptolemy_music")
	}
	$scope.scrollPortfolioRight = function(){
		
		console.log($scope, $scope.firstRowHeight)

		// animated slideInRight
		$('.cahoots').removeClass('slideInLeft').addClass('slideOutLeft')
		$('.mobius').removeClass('slideInLeft').addClass('slideOutLeft')
		$('.dannaBreen').removeClass('slideInLeft').addClass('slideOutLeft')
		$(".rightArrow > img").removeClass('slideInLeft').addClass('slideOutLeft')
	    $timeout(function() {
	  	 $scope.showPortfolio = false;
	  	 $scope.showHiddenPortfolio = true;

	  	 $('.hiddenPortfolio').css('display','block')
	  	 $(".leftArrow > img").css({"opacity": "1", "-webkit-opacity": "1", "-moz-opacity": "1"});

	  	 $('.cahoots2').removeClass('slideOutRight').addClass('slideInRight');
	  	 $('.mobius2').removeClass('slideOutRight').addClass('slideInRight');
	  	 $('.dannaBreen2').removeClass('slideOutRight').addClass('slideInRight');
	  	 $(".leftArrow > img").removeClass('slideOutRight').addClass('slideInRight');

	  	 $('.firstRow').css('height', $scope.firstRowHeight)
	    }, 775);		
	}

	$scope.scrollPortfolioLeft = function(){

		$('.cahoots2').removeClass('slideInRight').addClass('slideOutRight');
		$('.mobius2').removeClass('slideInRight').addClass('slideOutRight');
		$('.dannaBreen2').removeClass('slideInRight').addClass('slideOutRight');
		$(".leftArrow > img").removeClass('slideInRight').addClass('slideOutRight')

	    $timeout(function() {
	  	 $scope.showPortfolio = true;
	  	 $scope.showHiddenPortfolio = false;
	  	 $('.cahoots').removeClass('slideOutLeft').addClass('slideInLeft');
	  	 $('.mobius').removeClass('slideOutLeft').addClass('slideInLeft');
	  	 $('.dannaBreen').removeClass('slideOutLeft').addClass('slideInLeft');
	  	 $(".rightArrow > img").removeClass('slideOutLeft').addClass('slideInLeft');
	    }, 775);
	}

	$scope.showPreview = false;
	$scope.showPreviewValue = '';

	$scope.showPreviewAs = function(type){
		switch(type) {
		  case 'mobius':
		  $scope.showPreview = true;
		  $scope.showMobius = true;
		  var mobiusVideo = document.getElementById("mobiusVideo"); 
		  mobiusVideo.play();
		  mobiusVideo.addEventListener('ended',function(){
		  	mobiusVideo.play();
		  });

		  $scope.showPreviewValue = type;
		  // console.log($('#mobius').html)
		  // $('#mobius').text('') 
		  // $scope.previewTypewriter('mobius','Mobius is a real-time, multiplayer space combat game. It sets itself apart from other browser based games with its complexity, graphic quality and a sandbox world. Players can sign up for an account to enjoy a persistant experience',5)


		    break
		  case 'cahoots':
		  $scope.showPreview = true;
		  $scope.showCahoots = true;
		  $scope.showPreviewValue = type;
		    break;
		  case 'danna':
		  $scope.showPreview = true;
		  $scope.showDanna = true;
		  $scope.showPreviewValue = type;
		    break;
		  case 'mock1':
		  $scope.showPreview = true;
		  $scope.showMock1 = true;
		  $scope.showPreviewValue = type;
		  var mock1Video = document.getElementById("mock1Video"); 
		  mock1Video.play();
		  mock1Video.addEventListener('ended',function(){
		  	mock1Video.play();
		  });
		    break;
		  case 'mock2':
		  $scope.showPreview = true;
		  $scope.showMock2 = true;
		  $scope.showPreviewValue = type;
		  var mock2Video = document.getElementById("mock2Video"); 
		  mock2Video.play();
		  mock2Video.addEventListener('ended',function(){
		  	mock2Video.play();
		  });
		    break;
		  case 'ptolemy':
		  $scope.showPreview = true;
		  $scope.showPtolemy = true;
		  $scope.showPreviewValue = type;
		  var mock2Video = document.getElementById("ptolemyVideo"); 
		  ptolemyVideo.play();
		  ptolemyVideo.addEventListener('ended',function(){
		  	ptolemyVideo.play();
		  });
		    break;

		  default:
		    console.log('no type')
		    break;
		}
	};
	$scope.showPreviewOff = function(){
		$scope.showPreview = false;
		$scope.showMobius = false;
		$scope.showCahoots = false;
		$scope.showDanna = false;
		$scope.showMock1 = false;
		$scope.showMock2 = false;
		$scope.showPtolemy = false;
		$('#mobius').html = ''
		$('#cahoots').html = ''
		$('#danna').html = ''
		clearInterval($scope.previewTypewriterMessage)
	};
});

// TRANSPARENCY BAR FADE TO BLACK
var screenHeight = $(window).height()
var fadePoint = screenHeight - 50
// console.log('screen height is: '+screenHeight)
// console.log('fadePoint is: '+fadePoint)
function potatoeScroll(ev){
	// console.log(window.pageYOffset)
    // if(window.pageYOffset>fadePoint)$('.navbar').css("background-color", "black")
    // else $('.navbar').css("background-color", "transparent")
    
}
window.onscroll=potatoeScroll

var aboutPage = $("#about").position().top; 
var portfolioPage = $("#portfolio").position().top; 
var homePage = $("#home").position().top; 
$(window).on("scroll", function() {
var hideTimer1, hideTimer2;
  var scrollPosition = scrollY || pageYOffset;
  if (scrollPosition === aboutPage){
  	$('#sidebar-wrapper').stop().animate({left:"0px", opacity:1},500); 
  	// window.clearTimeout(hideTimer2)
  	// hideTimer1 = setTimeout( function(){

 	 //    $('#sidebar-wrapper').stop().animate({left: '-150px', opacity:0},500);
   //   }, 10000);
  	// $('.head')[0].style.display = 'block'
  	// var go = setTimeout(showHead, 3500)
  	$('li.aboutButton').addClass('active')
  	$('li.homeButton').removeClass('active')
  	$('li.portfolioButton').removeClass('active')
  }
  if (scrollPosition === portfolioPage ){
  	$('#sidebar-wrapper').stop().animate({left:"0px", opacity:1},500); 
  	// window.clearTimeout(hideTimer1)
  	// hideTimer2 = setTimeout( function(){
 	 //    $('#sidebar-wrapper').stop().animate({left: '-150px', opacity:0},500);
   //   }, 10000);
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


// function showHead() {
// $('.head')[0].style.display = 'block'
// var go = setTimeout(showHead, 5000);
// }






// $('.papaya').click(function () {
//       $('#wrapper').toggleClass('toggled');
// }); 

// $('#richard').click(function () {
//       $('#wrapper').toggleClass('toggled');
// });

// $('#sidebar-wrapper').hover(function () {
// 	var w = $(this).css('width')
//      $(this).stop().animate({left:"0px", opacity:1},500); 
//      var timeWidth2 = setTimeout(function(){
//      	$('#sidebar-wrapper').css('width',180);    
//      },400)
// 	console.log($(this).css('width'))
//    },function () {
//        $(this).stop().animate({left: '-150px', opacity:0 },500); 
//        var timeWidth2 = setTimeout(function(){
//        	$('#sidebar-wrapper').css('width',330);   
//        },500)
// });



