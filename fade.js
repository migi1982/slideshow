$(function(){
	var ban = target + ' > img';
	var num = $(ban).length;
	var x=0;
	var y=1;
	var timer;

	$(ban + ':gt(0)').addClass('hidden');

	function fade(){
		$(ban + ':eq(' + x + ')').removeClass('fIn').addClass('fOut').addClass('hidden');
		$(ban + ':eq(' + y + ')').removeClass('fOut').removeClass('hidden').addClass('fIn');
		counter();
	}
	function counter(){
		if(x<num-1){
			x++;
		}else{
			x=0;
		}
		if(y<num-1){
			y++;
		}else{
			y=0;
		}
	}
	timer = setInterval(fade,time);

});
