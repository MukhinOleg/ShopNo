$(document).ready(function(){
   	SelectSlide();
   });
    	
    	var slides = document.querySelectorAll('.slides .slide');
    	var slides2 = document.querySelectorAll('.slides2 .slide2');
        var currentSlide = 0;
        var currentSlide2 = 0;
		var slideInterval = setInterval(nextSlide,5000);
		var navig = $('.nav')


		function nextSlide(){
    		slides[currentSlide].className = 'slide';
    		currentSlide = (currentSlide+1)%slides.length;
    		slides[currentSlide].className = 'slide showing';

    		slides2[currentSlide2].className = 'slide2';
    		currentSlide2 = (currentSlide2+1)%slides2.length;
    		slides2[currentSlide2].className = 'slide2 showing';
		}

		function SelectSlide(){
			$('.nav').click(function(event){
				th = event.target;
				currID = $(th).attr('id');
				currnum = currID.charAt(6);
				for(i=0; i<slides.length; i++){
					slides[i].className = 'slide';
					navig[i].className= 'nav';
				}
				slides[parseInt(currnum) - 1].className = 'slide showing';
				navig[parseInt(currnum) - 1].className = 'nav checked';
			})
		}

		function nextSlide2() {
    goToSlide(currentSlide2+1);
}

function previousSlide2() {
    goToSlide(currentSlide2-1);
}

function goToSlide(n) {
    slides2[currentSlide2].className = 'slide2';
    currentSlide2 = (n+slides2.length)%slides2.length;
    slides2[currentSlide2].className = 'slide2 showing';
}

var next = document.getElementById('next');
var previous = document.getElementById('previous');

next.onclick = function() {
    nextSlide2();
};
previous.onclick = function() {
    previousSlide2();
};