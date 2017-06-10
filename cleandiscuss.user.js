// ==UserScript==
// @name          Namuwiki hide hidden discuss thread
// @description	  Hide hidden discuss thread in namuwiki.
// @author        Lastorder-DC
// @include       https://namu.wiki/*
// @run-at        document-end
// @version       0.2
// ==/UserScript==
(function() {
$('.r-hidden-body').each(function( index ) {
	$(this).parent().parent().remove();
});
})();
