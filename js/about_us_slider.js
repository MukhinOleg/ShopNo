$(document).ready(function(){
   	SelectSlide();
   });
    	
    	var slides = document.querySelectorAll('#slides .slide');
        var currentSlide = 0;
		var slideInterval = setInterval(nextSlide,3000);
		var navig = $('.nav')


		function nextSlide(){
    		slides[currentSlide].className = 'slide';
    		currentSlide = (currentSlide+1)%slides.length;
    		slides[currentSlide].className = 'slide showing';
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