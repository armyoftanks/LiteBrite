

$(document).ready(function() {

  var $deviceHeight = $(window).height();
  var $deviceWidth = $(window).width();

  for(i=0; i<$deviceHeight; i++){
    $("body").append('<div class="row"></div>');
    for(i=0; i<$deviceWidth; i++){
      $("body").append('<div class="box"></div>');
    }
  }


  var colorClass = '';

  $('.select-color').click(function() {
    var selectedColor = $(this).attr('class');

    switch (selectedColor) {
      case "select-color cyan not-selected":
        colorClass = 'cyan';
        break;
      case "select-color yellow not-selected":
        colorClass = 'yellow';
        break;
      case "select-color magenta not-selected":
        colorClass = 'magenta';
       	break;
     }

    $(this).removeClass('not-selected');
    $(this).siblings().addClass('not-selected');
  });


  $('.box').click(function() {
    $(this).toggleClass(colorClass);
  });

  $('.toggle-blink').click(function() {
    if(colorClass) {
      $('.toggle-blink').toggleClass('opacity');
      setInterval(function() {
        $('.box.cyan, .box.yellow, .box.magenta').toggleClass('blink');
      }, 350);
    }
  });

});
