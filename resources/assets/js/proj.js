$(function() {
  $('#side-menu').metisMenu();
});

//Loads the correct sidebar on window load,
//collapses the sidebar on window resize.
// Sets the min-height of #page-wrapper to window size
$(function() {
  $(window).bind("load resize", function() {
    var topOffset = 50;
    var width = (this.window.innerWidth > 0) ? this.window.innerWidth : this.screen.width;
    if (width < 768) {
      $('div.navbar-collapse').addClass('collapse');
      topOffset = 100; // 2-row-menu
    } else {
      $('div.navbar-collapse').removeClass('collapse');
    }

    var height = ((this.window.innerHeight > 0) ? this.window.innerHeight : this.screen.height) - 1;
    height = height - topOffset;
    if (height < 1) height = 1;
    if (height > topOffset) {
      $("#page-wrapper").css("min-height", (height) + "px");
    }
  });

  var url = window.location;
  // var element = $('ul.nav a').filter(function() {
  //     return this.href == url;
  // }).addClass('active').parent().parent().addClass('in').parent();
  var element = $('ul.nav a').filter(function() {
    return this.href == url;
  }).addClass('active').parent();

  while (true) {
    if (element.is('li')) {
      element = element.parent().addClass('in').parent();
    } else {
      break;
    }
  }
});

//Login
$(function(){
    $('#particles').particleground({
        minSpeedX: 0.1,
        maxSpeedX: 0.7,
        minSpeedY: 0.1,
        maxSpeedY: 0.7,
        directionX: 'center', // 'center', 'left' or 'right'. 'center' = dots bounce off edges
        directionY: 'center', // 'center', 'up' or 'down'. 'center' = dots bounce off edges
        density: 10000, // How many particles will be generated: one particle every n pixels
        dotColor: '#eee',
        lineColor: '#eee',
        particleRadius: 7, // Dot size
        lineWidth: 1,
        curvedLines: true,
        proximity: 100, // How close two dots need to be before they join
        parallax: false
    });
});
