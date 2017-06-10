// ==UserScript==
// @name          Namuwiki hide hidden discuss thread
// @description	  Hide hidden discuss thread in namuwiki.
// @author        Lastorder-DC
// @include       https://namu.wiki/*
// @run-at        document-start
// @version       0.1
// ==/UserScript==
(function() {
$( document ).ready(function() {
	$('.r-hidden-body').each(function( index ) {
		$(this).parent().parent().remove();
	});
});
})();
