/* ===========================================================
 *
 * C Williams
 * Authored: 3/11/15
 *
 * ========================================================== */

$(document).ready(function () {
    
    // Seeks IE browser engines, appends corresponding classing.
    if ($.browser.msie === true) {
        $('body').addClass('ie');
        if (!$.support.opacity) {
            /* IE 6-8 */
            $('body').addClass('ie8');
        }
    }
    if (navigator.userAgent.match(/Trident\/7\./)) {
		$('body').addClass('ie11 ie');
    }
    
    // NLS Modifications
    $('.widget-nls .button').prepend('<i class="fa fa-search"></i>');
    $('#nls-link').append('<i class="fa fa-caret-right"></i>');
    
    // Featured Listings Widget Modifications
    $('.pagecontrols a.next').html('<i class="fa fa-angle-right"></i>');
    $('.pagecontrols a.prev').html('<i class="fa fa-angle-left"></i>');
    
    // Truncate "List Price" from Feat Listing widget
    $('.listmlnumber').each(function () {
        $(this).text($(this).text().substr(10));
    });
    // Removes "Number and replaces it with #
    $('.listprice').text(function (i, text) {
        return text.replace('Number', '#');
    });
    
    // Replaces default Admin AAQ form functionality. 
    $('#askaquestion form').submit(function () {
        $('input.errorForm').each(function () {
            $(this).parent().append('<div class="errorFlag"><i class="fa fa-times"></i></div>');
            $(this).parent().removeClass('valid');
        });
        $('textarea.errorForm').each(function () {
            $(this).parent().removeClass('valid');
            $(this).parent().append('<div class="errorFlag"><i class="fa fa-times"></i></div>');
        });
    });
    $('#askaquestion form input').blur(function () {
        $('input.errorForm').each(function () {
            $(this).parent().removeClass('valid');
        });
        $('input.valid').each(function () {
            $(this).parent().addClass('valid');
        });
    });
    $('#askaquestion form textarea').blur(function () {
        $('textarea.errorForm').each(function () {
            $(this).parent().removeClass('valid');
        });
        $('textarea.valid').each(function () {
            $(this).parent().addClass('valid');
        });
    });
});