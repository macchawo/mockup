$(document).ready(function(){
	/**
	 * 初期表示アーカイブ
	 */
	$("li.month").hide();
	
	/**
	 * アーカイブ
	 */
	$("li.year").click(function () {
		var parentName = $(this).parent(".arcive").attr("id");
  		var state = $(this).children().attr("class").split("-")[1];
  		if (state == "top") {
  			$("ul#" + parentName).children(".month").hide();
  			$(this).children().removeClass("marker-top");
  			$(this).children().attr("class", "marker-bottom");
  		} else {
  			$("ul#" + parentName).children(".month").show();
  			$(this).children().removeClass("marker-bottom");
  			$(this).children().attr("class", "marker-top");
  		}
	});
});