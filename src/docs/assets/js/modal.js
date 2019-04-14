
$(document).ready(function () {
  $("#defaultBtn").click(function(){
    $("#newDark").toggleClass("c-modal-visible");
  });

  $("#close, #cancel").click(function(){
    $("#newDark").removeClass("c-modal-visible");
  });

  $("#largeBtn").click(function(){
    $("#largeModal").toggleClass("c-modal-visible");
  });

  $("#close, #cancel").click(function(){
    $("#largeModal").removeClass("c-modal-visible");
  });

  $("#smallBtn").click(function(){
    $("#smallModal").toggleClass("c-modal-visible");
  });

  $("#close, #cancel").click(function(){
    $("#smallModal").removeClass("c-modal-visible");
  });

  $("#centerBtn").click(function(){
    $("#centerModal").toggleClass("c-modal-visible");
  });

  $("#close, #cancel").click(function(){
    $("#centerModal").removeClass("c-modal-visible");
  });

  $("#fullscreenBtn").click(function(){
    $("#fullscreenModal").toggleClass("c-modal-visible");
  });

  $("#close, #cancel").click(function(){
    $("#fullscreenModal").removeClass("c-modal-visible");
  });

});
