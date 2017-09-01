window.onload = function() {
	switchDiv();
}

function switchDiv() {
	var summary = document.querySelector(".wrap-summary");
	var stores = document.querySelector(".wrap-stores");
	var goods = document.querySelector(".wrap-goods");
	var wraps = document.querySelectorAll(".wrap");

	var bottomTab = document.querySelector(".bottomTab");
	var tabItems = bottomTab.querySelectorAll("div");

	var lastTab = tabItems[0];
	var lastWrap = wraps[0];
	for(var i = 0; i < tabItems.length; i++) {
		var oItem = tabItems[i];
		oItem.index = i;
		oItem.addEventListener("touchend", function() {
			for(var i = 0; i < tabItems.length; i++) {
				var item = tabItems[i];
				item.style.color = "white";
				item.style.background = "#34CC92";	
			}
			this.style.background = "white";
			this.style.color = "#34CC92";	
			changeTab(this.index);
		})
	}

	function changeTab(index) {
		for(var i = 0; i < wraps.length; i++) {
			var oWrap = wraps[i];
			oWrap.index = i;
			if(index == i) {

				oWrap.style.display = "block";
			} else {
				oWrap.style.display = "none";
			}
		}
	}

}