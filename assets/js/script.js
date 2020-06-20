
var $animation_elements = $('.bounce-up');
var $window = $(window);

function check_if_in_view() {
    var window_height = $window.height();
    var window_top_position = $window.scrollTop();
    var window_bottom_position = (window_top_position + window_height);

    $.each($animation_elements, function() {
        var $element = $(this);
        var element_height = $element.outerHeight();
        var element_top_position = $element.offset().top;
        var element_bottom_position = (element_top_position + element_height);

        //check to see if this current container is within viewport
        if ((element_bottom_position >= window_top_position) &&
            (element_top_position <= window_bottom_position)) {
            $element.addClass('in-view');
        } else {
            $element.removeClass('in-view');
        }
    });
}

$window.on('scroll resize', check_if_in_view);
$window.trigger('scroll');
/*******************************/
var $animation_elements1 = $('.bounce-up1');
var $window1 = $(window);

function check_if_in_view1() {
    var window_height = $window1.height();
    var window_top_position = $window1.scrollTop();
    var window_bottom_position = (window_top_position + window_height);

    $.each($animation_elements1, function() {
        var $element = $(this);
        var element_height = $element.outerHeight();
        var element_top_position = $element.offset().top;
        var element_bottom_position = (element_top_position + element_height);

        //check to see if this current container is within viewport
        if ((element_bottom_position >= window_top_position) &&
            (element_top_position <= window_bottom_position)) {
            $element.addClass('in-view1');
        } else {
            $element.removeClass('in-view1');
        }
    });
}

$window1.on('scroll resize', check_if_in_view1);
$window1.trigger('scroll');
/**********************/
$('.search-button').click(function() {
    $('.search-input').toggle();
});
/************************************************/
$('.btn-languege .en').click(function () {
    $('.btn-languege .en').css('display','none');
    $('.btn-languege .fa').css('display','block');
});
$('.btn-languege .fa').click(function () {
    $('.btn-languege .fa').css('display','none');
    $('.btn-languege .en').css('display','block');
});
//************************************/
(function() {
    'use strict';
    $('.hamburger-menu').click(function (e) {
        e.preventDefault();
        if ($(this).hasClass('active')){
            $(this).removeClass('active');
            $('.menu-overlay').fadeToggle( 'fast', 'linear' );
            $('.menu .menu-list').slideToggle( 'slow', 'swing' );
            $('.hamburger-menu-wrapper').toggleClass('bounce-effect');
        } else {
            $(this).addClass('active');
            $('.menu-overlay').fadeToggle( 'fast', 'linear' );
            $('.menu .menu-list').slideToggle( 'slow', 'swing' );
            $('.hamburger-menu-wrapper').toggleClass('bounce-effect');
        }
    })
})();