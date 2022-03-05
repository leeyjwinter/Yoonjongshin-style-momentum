var banner_left = 0;
var img_cnt = 0;
var first=1;
var last;
var interval;
let MoveOn = false;

$(document).ready(function() {
	$(".rollingWrap a").each(function() {
		$(this).css("left", banner_left);
		banner_left += $(this).width()+5;
		$(this).attr("id", "content"+(++img_cnt));
	});

	last = img_cnt;
	startAction();

	// $(".content").hover(
	// 	function() { stopAction(); }, 
	// 	function() { startAction(); });
});

function startAction() {
	console.log(MoveOn);
	if(MoveOn === true){
		// console.log(MoveOn);
		return;
	}
	else{
	interval = setInterval(function() {
		$(".rollingWrap a").each(function() {
			$(this).css("left", $(this).position().left-1);
		});

		var first_content = $("#content"+first);
		var last_content = $("#content"+last);

		if(first_content.position().left < "-"+$(first_content).width()) {
			first_content.css("left", last_content.position().left+last_content.width()+5);
			first++;
			last++;
			if(last > img_cnt) { last = 1;}
			if(first > img_cnt) {first = 1;}
		}
	}, 15);
	MoveOn = true;
	}

}

function stopAction() {
	MoveOn = false;
	clearInterval(interval);
}

