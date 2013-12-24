$(function() {
  var moveSlide = true;

  $('body').on('mousewheel', function(event) {
    console.log(event.deltaX, event.deltaY, event.deltaFactor);
    event.preventDefault();
    if(moveSlide) {
      if(event.deltaY < -2) {
        $.scrollTo($('#from-san-francisco'), 500);
        moveSlide = false;
      } if(event.deltaY > 2) {
        $.scrollTo($('#missing-you'), 500);
        moveSlide = false;
      }
    setTimeout(function(){ moveSlide = true; }, 1300);
    }
  });
});