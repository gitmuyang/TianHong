
window.onload = function(){
	switchDiv();
	var wrap1 = document.querySelector('.wrap-summary');
	var wrap2 = document.querySelectorAll('.list');
	var arr = [wrap1,wrap2[0],wrap2[1]];
	
	for (var i = 0; i < arr.length; i++) {
		var wrap = arr[i];
	mScroll({
		el:wrap,
		offBar:true
	});
	}
}
