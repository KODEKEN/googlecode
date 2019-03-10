var closeNotice = function() {
	$('.notice').hide();
	/* 6 jam */
	setCookie('d21_notice', (24 * 60 * 60  * 1000  * 2));
}

$(document).ready(function() {
	$('#notice-text').html('<a href="https://layarkuy21.blogspot.com/"><strong>LayarKuy21 + Lk21 = LayarKuy21</strong> &raquo; Official Site</a>');
	
	if ( !getCookie('d21_notice') ) {
		$('.notice').show();
	}
	$('#btop-left').html('<a href="https://layarkuy21.blogspot.com" target="_blank" rel="nofollow"><img src="https://s1.layarkaca21.vip/assets/ux777-header.gif" class="img-responsive"></a>');
	$('#btop-right').html('<a href="https://layarkuy21.blogspot.com" target="_blank" rel="nofollow"><img src="https://s1.layarkaca21.vip/assets/top-right.gif" class="img-responsive"></a>');

	$('#bmid-left').html('<a href="https://layarkuy21.blogspot.com" target="_blank" rel="nofollow"><img src="https://s1.layarkaca21.vip/assets/top-left-jun.gif" class="img-responsive"></a>');
	$('#bmid-right').html('<a href="https://layarkuy21.blogspot.com" target="_blank" rel="nofollow"><img src="https://s1.layarkaca21.vip/assets/top-right.gif" class="img-responsive"></a>');

	$('#bplayer-single').html('<a href="https://layarkuy21.blogspot.com" target="_blank" rel="nofollow"><img src="https://s1.layarkaca21.vip/assets/player-single.gif" class="img-responsive"></a>');

	$('#bsquare').html('<a href="https://layarkuy21.blogspot.com" target="_blank" rel="nofollow"><img src="https://s1.layarkaca21.vip/assets/MILD88-Sidebar.gif" class="img-responsive"></a><br /><a href="http://www.qq338ww.com/?Id=8914&AdType=0" target="_blank" rel="nofollow"><img src="https://s1.layarkaca21.vip/assets/Sidebar_qq338.gif" class="img-responsive"></a>');

	$('#player-below-b').html('<a href="https://layarkuy21.blogspot.com" target="_blank" rel="nofollow"><img src="https://s1.layarkaca21.vip/assets/below-player-jun.gif" class="img-responsive"></a>');

	/*$('<div class="alert alert-info alert-dismissible" style="margin-bottom:10px"><button type="button" class="close" data-dismiss="alert" aria-label="Close"><span aria-hidden="true">&times;</span></button><strong>Pemberitahuan</strong>. Domain Layarkaca21 Lk21 Dunia21.net berubah menjadi <a href="https://layarkuy21.blogspot.com/">LayarKuy21</a>. Maaf atas ketidak nyamanannya.</div>').insertBefore('.hot-slider');*/

	var luxPop = '<style type=\"text/css\">#overlay-pop{position: fixed;width: 100%;height: 100%;top: 0; left: 0;right: 0;bottom: 0;background-color: rgba(0,0,0,0.5);}</style><div id=\"overlay-pop\"><div style=\"position:fixed;top:50%;left:50%;width:580px;height:380px;margin:-190px 0 0 -290px;\" id=\"float-pop\"><a href=\"javascript:void(0)\" onclick=\"javascript:$(\'#overlay-pop\').hide();\"><span style=\"margin-top:-20px;background:#ff0000;padding:5px;color:#fff;font-weight:bold;font-size:14px;\">TUTUP IKLAN</span></a><a href=\"javascript:void(0)\" onclick=\"javascript:window.open(\'http://www.mild88oo.com/?Id=9166&AdType=0\', \'_blank\');$(\'#overlay-pop\').hide()\"><img src=\"https://s1.layarkaca21.vip/assets/mild88_5b0.gif\" width=\"580\" height=\"380\"></a></div></div>';
	
	if ( !isMobile() ) {
		if ($(window).width() > 661) {
			setTimeout(function() {$('body').append(luxPop);}, 7000);
		}
	}
});
