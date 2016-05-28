$(document).ready(function(){
	/**
	 * ログアウトマウスオーバー
	 */
	$("img.logout").hover(
    	function () {
    		$("img#exitarrow").removeAttr("class");
    		$("div.exit").children("span").removeAttr("class");
  		},
  		function () {
    		$("img#exitarrow").attr("class", "display_none");
    		$("div.exit").children("span").attr("class", "display_none");
  		}
  	);
});
