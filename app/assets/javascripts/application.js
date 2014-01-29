// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, vendor/assets/javascripts,
// or vendor/assets/javascripts of plugins, if any, can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file.
//
// Read Sprockets README (https://github.com/sstephenson/sprockets#sprockets-directives) for details
// about supported directives.
//
//= require jquery
//= require jquery_ujs
//= require turbolinks
//= require_tree .
//

var sections = $('.section'),
    links = $('.link'),
    lis = $('.links > li');

$(window).scroll(function() {
    var currentPosition = $(this).scrollTop();
    links.removeClass('selected');
    lis.removeClass('active-slide');

    sections.each(function() {
        var top = $(this).offset().top,
            bottom = top + $(this).height();

        if (currentPosition >= top && currentPosition <= bottom) {
            var link = $('a[href="#' + this.id + '"]');
            link.addClass('selected');
            link.parent().addClass('active-slide');
        }
    });

});
