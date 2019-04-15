
$(document).ready(function () {

  $(".c-action-panel-close").on("click", function () {
    $(this).closest(".c-action-panel").toggleClass("c-action-panel-visible")
  });

  $("#qv-basic-trigger").on("click", function () {
    $("#qv-basic").toggleClass("c-action-panel-visible");
    $("#backdrop-main").toggle()
  });

  $("#backdrop-main").on("click", function () {
    $("#backdrop-main").toggle();
    $("#qv-basic").toggleClass("c-action-panel-visible")
  });

  $("#qv-sm-trigger").on("click", function () {
    $("#qv-sm").toggleClass("c-action-panel-visible")
  });

  $("#qv-lg-trigger").on("click", function () {
    $("#qv-lg").toggleClass("c-action-panel-visible")
  });

  $("#qv-xl-trigger").on("click", function () {
    $("#qv-xl").toggleClass("c-action-panel-visible")
  });

  $("#qv-xxl-trigger").on("click", function () {
    $("#qv-xxl").toggleClass("c-action-panel-visible")
  });

  $("#qv-backdrop-dark-trigger").on("click", function () {
    $("#qv-backdrop-dark").toggleClass("c-action-panel-visible");
    $("#backdrop-dark").toggle()
  });

  $("#backdrop-dark").on("click", function () {
    $("#backdrop-dark").toggle();
    $("#qv-backdrop-dark").toggleClass("c-action-panel-visible")
  });
});
