$(document).ready(function(){
	/**
	 * 公開・非公開ラジオボタンクリック
	 */
	$("img.suitably_setting").click(function () {
		/* ラジオボタンのクリックイベント呼び出し */
		var radioVal = $(this).attr("class").replace("suitably_setting ", "");
		$("input[name='suitably_setting'][value='" + radioVal + "']").click();

		/* 画像の切り替え */
		var checkedRadioVal = $("input[name='suitably_setting'][value='" + radioVal + "']:checked").val();
		$("img.suitably_setting").each(function() {
			var target = $(this).attr("class").replace("suitably_setting ", "");
			if (checkedRadioVal == target) {
				$(this).attr("src", "../img/input-checked.png");
			} else {
				$(this).attr("src", "../img/input-unchecked.png");
			}
		});
	});
	
	/**
	 * サブメニュークリック 
	 */
	$("submenu_area").find("li").click(function () {
		/* CSSのクラスから遷移先画面を選択 */
	});
	
});
