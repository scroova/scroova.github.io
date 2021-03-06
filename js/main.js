var theToggle = document.getElementById('toggle');
var theCover = document.getElementsByClassName('cover');

// based on Todd Motto functions
// http://toddmotto.com/labs/reusable-js/

// hasClass
function hasClass(elem, className) {
	return new RegExp(' ' + className + ' ').test(' ' + elem.className + ' ');
}
// addClass
function addClass(elem, className) {
    if (!hasClass(elem, className)) {
    	elem.className += ' ' + className;
    }
}
// removeClass
function removeClass(elem, className) {
	var newClass = ' ' + elem.className.replace( /[\t\r\n]/g, ' ') + ' ';
	if (hasClass(elem, className)) {
        while (newClass.indexOf(' ' + className + ' ') >= 0 ) {
            newClass = newClass.replace(' ' + className + ' ', ' ');
        }
        elem.className = newClass.replace(/^\s+|\s+$/g, '');
    }
}
// toggleClass
function toggleClass(elem, className) {
	var newClass = ' ' + elem.className.replace( /[\t\r\n]/g, " " ) + ' ';
    if (hasClass(elem, className)) {
        while (newClass.indexOf(" " + className + " ") >= 0 ) {
            newClass = newClass.replace( " " + className + " " , " " );
        }
        elem.className = newClass.replace(/^\s+|\s+$/g, '');
    } else {
        elem.className += ' ' + className;
    }
}

theToggle.onclick = function() {
   toggleClass(this, 'on');
   return false;
}

 /*
     * Replace all SVG images with inline SVG
     */
        jQuery('img.svg').each(function(){
            var $img = jQuery(this);
            var imgID = $img.attr('id');
            var imgClass = $img.attr('class');
            var imgURL = $img.attr('src');

            jQuery.get(imgURL, function(data) {
                // Get the SVG tag, ignore the rest
                var $svg = jQuery(data).find('svg');

                // Add replaced image's ID to the new SVG
                if(typeof imgID !== 'undefined') {
                    $svg = $svg.attr('id', imgID);
                }
                // Add replaced image's classes to the new SVG
                if(typeof imgClass !== 'undefined') {
                    $svg = $svg.attr('class', imgClass+' replaced-svg');
                }

                // Remove any invalid XML tags as per http://validator.w3.org
                $svg = $svg.removeAttr('xmlns:a');

                // Replace image with new SVG
                $img.replaceWith($svg);

            }, 'xml');

        });
/*$(window).enllax();*/

$(".outline").click(function() {
    $('html,body').animate({
        scrollTop: $("#section1").offset().top},
        'slow');
});
$(".chevron").click(function() {
     $.fn.fullpage.moveSectionDown();
});
    /*$('html,body').animate({
        scrollTop: $("#section1").offset().top},
        'slow');*/

$(".citybutton1").click(function() {
    $('.cityp2').fadeOut(333);
    $('.cityp2').animate({top: '40%'});
    $('.cityp1').delay(333).fadeIn(333);
    $('.citybutton1').addClass("citypon");
    $('.citybutton2').removeClass('citypon');
});
$(".citybutton2").click(function() {
    $('.cityp1').fadeOut(333);
    $('.cityp1').animate({top:'40%'});
    $('.cityp2').delay(333).fadeIn(333);
    $('.citybutton2').addClass("citypon");
    $('.citybutton1').removeClass('citypon');
});
$(".citybutton1").click(function() {
    $('.nycpalette').removeClass('cityon');
});
$(".citybutton2").click(function() {
 $('.nycpalette').addClass("cityon");
});
$(window).load(function() {
    $('.cityp1').animate({top:'40%'});
    $('.cityp2').animate({top:'40%'});
    $('.cityp1').fadeIn(100);
    $('.cityp2').fadeOut(100);
});
$(window).scroll(function() {
    if ($(document).scrollTop()> 500) {
        $('#toggle span').addClass('blue');
    } else {
        $('#toggle').addClass('white');
    }
});