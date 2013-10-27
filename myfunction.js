var flagleft=1, flagright=0;

function create(){
	$('#outbox').addClass('main');
	$('#inbox').addClass('submain');
}

function reset(){
	$('.submain').css("margin-left", "0px");
	$('#outbox').removeClass('main');
	$('#inbox').removeClass('submain');
}

function move(){
	var position = $('.submain').css("margin-left");
	var posi = parseInt(position);
	if(posi == 700 && flagleft==1){
		$('.submain').animate({marginLeft: "+=10"}, 300);
		flagleft=0;
		flagright=1;
	}
	else if(flagleft==1 && flagright==0){
		$('.submain').animate({marginLeft: "+=100"}, 300);
	}
	else if (flagright==1 && posi==10){
		$('.submain').animate({marginLeft: "-=10"}, 300);
		flagleft=1;
		flagright=0;
	}
	else if(flagright==1){
		$('.submain').animate({marginLeft: "-=100"}, 300);
	}
}