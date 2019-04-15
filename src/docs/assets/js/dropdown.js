$(document).ready(function () {


  $("#fab").click(function () {
    $(this).toggleClass("active");
  });

  $(".c-dropdown").click(function () {
    $(this).find(".c-dropdown-list, .c-dropdown-grid").slideToggle(100);
  });

  $(document).on("click", function (event) {
    var $dropdownTrigger = $(".c-dropdown");

    if ($dropdownTrigger !== event.target && !$dropdownTrigger.has(event.target).length) {
      $(".c-dropdown-list, .c-dropdown-grid").slideUp("fast");
    }
  });
});
