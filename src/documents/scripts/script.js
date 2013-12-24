$(function() {
  var moveSlide = true;
  var sectionMap = {};
  var currentSection = $('#beginning');
  var next, prev;

  $.localScroll({
    onBefore: function(ev, el, scroll) {
      currentSection = $(el);
    }
  });

  $('body').on('mousewheel', function(event) {
    event.preventDefault();
    if(moveSlide) {
      if(event.deltaY < 0 && currentSection[0] != $("#end")[0]) {
        next = nextSection(currentSection);
        $.scrollTo(next, 850);
        currentSection = next;
        moveSlide = false;
        setTimeout(function(){ moveSlide = true; }, 1300);
      } if(event.deltaY > 0 && currentSection[0] != $("#beginning")[0]) {
        prev = prevSection(currentSection);
        $.scrollTo(prev, 850);
        currentSection = prev;
        moveSlide = false;
        setTimeout(function(){ moveSlide = true; }, 1300);
      }
    }
  });

  var nextSection = function(section) {
    return section.next();
  }

  var prevSection = function(section) {
    return section.prev();
  }
});

