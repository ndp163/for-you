$(window).load(function(){
	$('.loading').fadeOut('fast');
	$('.container').fadeIn('fast');
});
$('document').ready(function(){
		var vw;
		$(window).resize(function(){
			 vw = $(window).width()/2;
			$('#b1,#b2,#b3,#b4,#b5,#b6,#b7').stop();
			$('#b11').animate({top:240, left: vw-350},500);
			$('#b22').animate({top:240, left: vw-250},500);
			$('#b33').animate({top:240, left: vw-150},500);
			$('#b44').animate({top:240, left: vw-50},500);
			$('#b55').animate({top:240, left: vw+50},500);
			$('#b66').animate({top:240, left: vw+150},500);
			$('#b77').animate({top:240, left: vw+250},500);
		});


	
	$('#turn_on').click(function(){
		document.querySelector("audio").play();
		$(".bulb").fadeIn(5000);
		$('#bulb_yellow').addClass('bulb-glow-yellow');
		$('#bulb_red').addClass('bulb-glow-red');
		$('#bulb_blue').addClass('bulb-glow-blue');
		$('#bulb_green').addClass('bulb-glow-green');
		$('#bulb_pink').addClass('bulb-glow-pink');
		$('#bulb_orange').addClass('bulb-glow-orange');
		$('body').addClass('peach');

		
        $('#bulb_yellow').addClass('bulb-glow-yellow-after');
		$('#bulb_red').addClass('bulb-glow-red-after');
		$('#bulb_blue').addClass('bulb-glow-blue-after');
		$('#bulb_green').addClass('bulb-glow-green-after');
		$('#bulb_pink').addClass('bulb-glow-pink-after');
		$('#bulb_orange').addClass('bulb-glow-orange-after');
	
			
		
		$(this).fadeOut('slow').delay(5000).promise().done(function(){
			var i;
			function msgLoop (i) {
				$("p:nth-child("+i+")").fadeOut('slow').delay(800).promise().done(function(){
				i=i+1;
				$("p:nth-child("+i+")").fadeIn('slow').delay(1000);
				if(i==42){
					$("p:nth-child(41)").fadeOut(3000);
					let audioElement = document.querySelector("audio");

					let audioInterval = setInterval(() => {
						if (audioElement.volume < 0.1) {
							audioElement.pause();
							clearInterval(audioInterval);
						}
						audioElement.volume -= 0.1;
					}, 400);
					$(".introduce").fadeOut(5000);
					$(".special-gift").fadeIn(5000);
					document.querySelector("video").play();
				}
				else{
					msgLoop(i);
				}			
			});
				// body...
			}
			
			msgLoop(0);
		});
	});		
});

//$(".special-gift video").trigger('play');


//alert('hello');
