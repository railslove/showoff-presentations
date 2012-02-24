(function() {
  var ga = document.createElement('script');
      ga.type = 'text/javascript';
      ga.src = 'http://fast.fonts.com/jsapi/8c776e27-7f89-4385-8243-c509dab6ca58.js';
  var s = document.getElementsByTagName('script')[0];
  s.parentNode.insertBefore(ga, s);
})();

(function( $ ) {
  $(document).ready(function() {

    $(document).bind("showoff:loaded", function (event) {
      
      $('.content').each( function(index){
        //copy classes applied to .content div to its parent .slide div (except the .content class)
        $(this).parents('.slide').addClass($(this)[0].className).removeClass('content');
      });

      //after applying our classes to the slide, we need to recalculate the vertical centering
      centerSlides($('.slide'));
      //also do that when showing a new slide
      $('.slide').bind("showoff:show", function (event) {
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
      
    });

  });

})( jQuery );
