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
        //remove all classes from the .content div except for the .content class
        $(this).removeClass($(this)[0].className).addClass('content');
      });
    });
  });
})( jQuery );
