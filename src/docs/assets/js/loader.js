
$(document).ready(function () {
  $("#fullscreenLoaderBtn").click(function(){
    $("#fullscreenLoader").toggleClass("c-loader-visible");
  });

  $("#fullscreenLoader").click(function(){
    $("#fullscreenLoader").removeClass("c-loader-visible");
  });

  $("#fullscreenLoaderBtn2").click(function(){
    $("#fullscreenLoader2").toggleClass("c-loader-visible");
  });

  $("#fullscreenLoader2").click(function(){
    $("#fullscreenLoader2").removeClass("c-loader-visible");
  });
});

