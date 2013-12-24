$(function() {
  var moveSlide = true;
  var sectionMap = {};
  var currentSection = $('#missing-you');
  var next, prev;
  $('section').each(function(i,obj){
    console.log($(obj));
  });

  $('body').on('mousewheel', function(event) {
    event.preventDefault();
    if(moveSlide) {
      if(event.deltaY < -2) {
        next = nextSection(currentSection);
        $.scrollTo(next, 1000);
        currentSection = next;
        moveSlide = false;
      } if(event.deltaY > 2) {
        prev = prevSection(currentSection);
        $.scrollTo(prev, 1000);
        currentSection = prev;
        moveSlide = false;
      }
    setTimeout(function(){ moveSlide = true; }, 1300);
    }
  });

  var nextSection = function(section) {
    return section.next();
  }

  var prevSection = function(section) {
    return $(section).prev();
  }
});

