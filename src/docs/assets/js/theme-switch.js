$(function () {
/************************************************
* Flavor Switch
*************************************************/

var $html = $('html');

$html.on('click.ui.dropdown', '.docs-flavor-switch', function(e) {
  e.preventDefault();
  $(this).toggleClass('is-open');
});

$html.on('click.ui.dropdown', '.docs-flavor-switch [data-dropdown-value]', function(e) {
  e.preventDefault();
  var $item = $(this);
  var $dropdown = $item.parents('.docs-flavor-switch');
  $dropdown.find('.docs-flavor-switch-input').val($item.data('dropdown-value'));
  $dropdown.find('.docs-flavor-switch-current').text($item.text());
});

$html.on('click.ui.dropdown', function(e) {
  var $target = $(e.target);
  if (!$target.parents().hasClass('docs-flavor-switch')) {
    $('.docs-flavor-switch').removeClass('is-open');
  }
});


// Local storage settings
var themeSettings = getThemeSettings();

// Elements
var $app = $('#docs-app');
var $styleLink = $('#theme-style');
var $customizeMenu = $('#customize-menu');
var $customizeMenuDropdown = $customizeMenu.find('.flavor');


// Initial State
setThemeSettings();


// Set theme type
$customizeMenuDropdown.on('click', function () {
  themeSettings.themeName = $(this).data('theme');
  setThemeSettings();
});

function setThemeSettings() {
  setThemeState()
    .delay(50)
    .queue(function (next) {

      setThemeControlsState();
      saveThemeSettings();

      $(document).trigger("themechange");

    next();
  });
}



// Update theme based on options
function setThemeState() {
  // set theme type
  if (themeSettings.themeName) {
    $styleLink.attr('href', '../' + themeSettings.themeName + '.css');
  } else {
    $styleLink.attr('href', '../cupcake.css');
  }

  return $app;
}


// Update theme controls based on options
function setThemeControlsState() {
  // set color switcher
  $customizeMenuDropdown.each(function () {
    if ($(this).data('theme') === themeSettings.themeName) {
      $(this).addClass('c-dropdown-item-selected');
    } else {
      $(this).removeClass('c-dropdown-item-selected');
    }
  });
}


// $(function () {
//   /************************************************
//   * Flavor Switch
//   *************************************************/

//   var selectElement = $("select");
//   selectElement.change(function() {
//       $("select option:selected").each(function() {
//           switchTheme($(this).val());
//       })
//   });

//   themeKey = "cupcake";

//   function switchTheme(themeName) {
//       var name = "cupcake";
//       if (themeName == null) {
//           var storedName = localStorage.getItem(themeKey);
//           if (storedName != null)
//               name = storedName;
//       } else {
//           name = themeName;
//           localStorage.setItem(themeKey, name);
//       }
//       $('#theme-style').attr('href', '../' + name + ".css");
//   }
// }(jQuery));



// Storage Functions
function getThemeSettings() {
  var settings = (localStorage.getItem('themeSettings')) ? JSON.parse(localStorage.getItem('themeSettings')) : {};

  return settings;
}

function saveThemeSettings() {
  localStorage.setItem('themeSettings', JSON.stringify(themeSettings));
}

}(jQuery));

