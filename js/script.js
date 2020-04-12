$(document).ready(function(){
		
		// nav dropdown effect
		  $('.dropdown').on("click", function(){
		     	$('.dropdown-menu').slideToggle(650);
		   });

		  // $('#suite').on("click", function(){
		  // 	 $('#select').slideToggle(650);
		  // });

		  // all navbar menu effects
		  $('#navbar-collapse>ul>li').on({
		  	   mouseenter: function(){
			        $(this).css("background-color", "#12284c");
			        $(this).css("transition", "all 0.5s ease");
			        $(this).css("color", "#12284c");
			        $(this).css("transform", "scale(1.1)");

			    }, 
			    mouseleave: function(){ 
			        $(this).css("transform", "scale(1)");
			        $(this).css("background-color", "#222");
			    }
			
		   });


 	 // button transition effect
		$('.button').on({
			mouseenter: function(){
				$(this).css("transition" , "all 0.5s ease");
				$(this).css("transform" , "scale(1.1)");

			}, 

			mouseleave: function(){
				$(this).css("transform" , "scale(1)")
			}
		});
});

   