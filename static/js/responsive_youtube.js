// Copied from https://css-tricks.com/NetMag/FluidWidthVideo/Article-FluidWidthVideo.php

$(document).ready(function() {

// Find all YouTube videos
var $allVideos = $("iframe[src*='//www.youtube.com']"),
  // The element that is fluid width
  $fluidEl = $(".content");

// Figure out and save aspect ratio for each video
$allVideos.each(function() {
  $el = $(this)
  $(this)
    .data('aspectRatio', $el.height() / $el.width())

    // and remove the hard coded width/height
    .removeAttr('height')
    .removeAttr('width');
});

// When the window is resized
$(window).resize(function() {
  var newWidth = $fluidEl.width() * 0.80;

  // Resize all videos according to their own aspect ratio
  $allVideos.each(function() {
    var $el = $(this);
    $el.width(newWidth + 'px');

    var newHeight = parseInt(newWidth * $el.data('aspectRatio'));
    console.log(newHeight);
    $el.height(newHeight+ 'px');
  });

// Kick off one resize to fix all videos on page load
}).resize();

});
