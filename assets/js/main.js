$(document).ready(function(){
  // Smooth scrolling for navigation links
  $('a.nav-link').on('click', function(event) {
      if (this.hash !== "") {
          event.preventDefault();
          var hash = this.hash;
          $('html, body').animate({
              scrollTop: $(hash).offset().top
          }, 800, function(){
              window.location.hash = hash;
          });
      }
  });

  // Animation on section visibility
  $(window).on('scroll', function() {
      $('section').each(function() {
          var topOfWindow = $(window).scrollTop();
          var sectionTop = $(this).offset().top;
          var sectionHeight = $(this).outerHeight();
          if (topOfWindow > sectionTop - sectionHeight/2 && topOfWindow < sectionTop + sectionHeight) {
              $(this).addClass('animate');
          } else {
              $(this).removeClass('animate');
          }
      });
  });
});
