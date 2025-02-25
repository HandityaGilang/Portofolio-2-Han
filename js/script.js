/*!
 * Generated using the Bootstrap Customizer (<none>)
 * Config saved to config.json and <none>
 */

 (function($) {

	"use strict";

	// ------------------------------------------------------------------------------ //
	// Overlay Menu Navigation
	// ------------------------------------------------------------------------------ //
	var overlayMenu = function () {

		if(!$('.nav-overlay').length) {
		  return false;
		}

		var body = undefined;
		var menu = undefined;
		var menuItems = undefined;
		var init = function init() {
		  body = document.querySelector('body');
		  menu = document.querySelector('.menu-btn');
		  menuItems = document.querySelectorAll('.nav__list-item');
		  applyListeners();
		};
		var applyListeners = function applyListeners() {
		  menu.addEventListener('click', function () {
		    return toggleClass(body, 'nav-active');
		  });
		};
		var toggleClass = function toggleClass(element, stringClass) {
		  if (element.classList.contains(stringClass)) element.classList.remove(stringClass);else element.classList.add(stringClass);
		};
		init();
	}
 
	// init jarallax parallax
	  var initJarallax = function() {
	    jarallax(document.querySelectorAll(".jarallax"));

	    jarallax(document.querySelectorAll(".jarallax-keep-img"), {
	      keepImg: true,
	    });
	  }


	// init Chocolat light box
	var initChocolat = function() {
	Chocolat(document.querySelectorAll('.image-link'), {
	    imageSize: 'contain',
	    loop: true,
		})
	}

	$(document).ready(function () {

		overlayMenu();
		initChocolat();
		initJarallax();

		AOS.init({
			duration: 1200,
			once: true,
		})

		// slick sliders
		$('.testimonial-slider').slick({
		    arrows: true,
		    infinite: true,
		    speed: 500,
		    fade: true,
		    cssEase: 'none'
		});
		// Fungsi untuk menekan tombol arrow secara otomatis
		setInterval(function() {
			$('.testimonial-slider .slick-next').click(); // Menekan tombol panah kanan otomatis
		}, 3000); // Ganti angka ini dengan interval waktu dalam milidetik (3000ms = 3 detik)
	
	});
 
	// preloader
	$(window).load(function() {
		$("#overlayer").fadeOut("slow");
		$('body').addClass('loaded');
	})

})(jQuery);

function showDescription(element) {
    element.querySelector('.skill-description').style.display = 'block';
}

function hideDescription(element) {
    element.querySelector('.skill-description').style.display = 'none';
}

// Typewriter Effect
const texts = [
    "DEVELOPER",
    "DESIGNER",
    "PROGRAMMER",
    "CONTENT CREATOR"
]
let speed  =100;
const textElements = document.querySelector(".typewriter-text");
let textIndex = 0;
let charcterIndex = 0;
function typeWriter(){
    if (charcterIndex < texts[textIndex].length){
        textElements.innerHTML += texts[textIndex].charAt(charcterIndex);
        charcterIndex++;
        setTimeout(typeWriter, speed);
    }
    else{
        setTimeout(eraseText, 1000)
    }
}
function eraseText(){
    if(textElements.innerHTML.length > 0){
        textElements.innerHTML = textElements.innerHTML.slice(0,-1);
        setTimeout(eraseText, 50)
    }
    else{
        textIndex = (textIndex + 1) % texts.length;
        charcterIndex = 0;
        setTimeout(typeWriter, 500)
    }
}
window.onload = typeWriter