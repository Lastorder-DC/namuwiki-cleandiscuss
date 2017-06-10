// ==UserScript==
// @name          Namuwiki discuss image block
// @description	  Block image of discuss page. Just temporary solution.
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
