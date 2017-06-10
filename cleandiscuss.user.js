// ==UserScript==
// @name          Namuwiki discuss image block
// @description	  Block image of discuss page. Just temporary solution.
// @author        Lastorder-DC
// @include       https://namu.wiki/*
// @run-at        document-start
// @version       0.1
// ==/UserScript==
(function() {var css = [
	".res-wrapper .res .r-body img.wiki-image {",
	"    display: none;",
	"}"
].join("\n");
if (typeof GM_addStyle != "undefined") {
	GM_addStyle(css);
} else if (typeof PRO_addStyle != "undefined") {
	PRO_addStyle(css);
} else if (typeof addStyle != "undefined") {
	addStyle(css);
} else {
	var node = document.createElement("style");
	node.type = "text/css";
	node.appendChild(document.createTextNode(css));
	var heads = document.getElementsByTagName("head");
	if (heads.length > 0) {
		heads[0].appendChild(node);
	} else {
		// no head yet, stick it whereever
		document.documentElement.appendChild(node);
	}
}

$( document ).ready(function() {
	$('.r-hidden-body').each(function( index ) {
		$(this).parent().parent().remove();
	});
});

})();
