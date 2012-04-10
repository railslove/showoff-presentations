(function() {
  var ga = document.createElement('script');
      ga.type = 'text/javascript';
      ga.src = 'http://fast.fonts.com/jsapi/8c776e27-7f89-4385-8243-c509dab6ca58.js';
  var s = document.getElementsByTagName('script')[0];
  s.parentNode.insertBefore(ga, s);
})();

(function( $ ) {

  $(document).keypress(function(e) {
    if(e.altKey && e.which == 960){
      //detect Alt + P keypress
      $('.slide').css({
        display: 'block',
        opacity: 1,
        position: 'relative'
      });
      $('body').css('overflow', 'auto');
      $('#preso').css('overflow', 'visible');
      $('.slide').after('<div class="page-break"></div>');

      centerSlides($('.slide.vertically-centered'));

      alert("Now you can print using safari's normal print option\nDon't forget to check the print backgrounds option, and preferrably use landscape mode.");
    }
  });

  $(document).ready(function() {

    $(document).bind("showoff:loaded", function (event) {
      
      $('.content').each( function(index){
        //copy classes applied to .content div to its parent .slide div (except the .content class)
        $(this).parents('.slide').addClass($(this)[0].className).removeClass('content');
      });

      //after applying our classes to the slide, we need to recalculate the vertical centering
      $('.slide .content').css('margin-top', '120px');
      centerSlides($('.slide.vertically-centered'));
      //also do that when showing a new slide
      $('.slide.vertically-centered').bind("showoff:show", function (event) {
        centerSlides($(this));
      });

      $('.slide.full-page-image .content img').each( function(index){
        $(this).parent().append( $('<div class="title">').append( $(this).attr('alt') ) );
      });

      $('.full-page-image').bind("showoff:show", function (event) {
        $('#footer').fadeOut();
      });
      $('.full-page-image').bind("showoff:next showoff:prev", function (event) {
        $('#footer').fadeIn();
      });

      $('.slide').bind("showoff:next showoff:prev", function (event) {
        clearTimeout(self.$autoAdvanceTimer);
      });
      $('.slide[class*="auto-advance"]').bind("showoff:show", function (event) {
        $(this)[0].className.split(' ').each( function(className){
          if( className.indexOf('auto-advance') == 0 ){
            self.$autoAdvanceTimer = setTimeout(nextStep, className.split('-').pop());
          }
        });
      });
      
    });

  });

})( jQuery );
