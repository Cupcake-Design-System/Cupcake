
$(document).ready(function () {


  // Check for click events on the navbar toggle
  $(".c-nav-toggle").click(function() {

  // Toggle the active class on both the nav and the menu
    $(".c-nav-toggle").toggleClass("c-nav-toggle-active");
    $(".c-header").toggleClass("c-nav-active");
  });


// Hide sidebar
$('#sidenavHideToggle').on('click', function (e) {
  e.preventDefault();

  $('#sidenavMain').removeClass('c-sidenav-folded').toggleClass('c-sidenav-hidden');
});


// Fixed Layout
$('#layoutFixedToggle').on('click', function (e) {
  e.preventDefault();

  $('body').removeClass().toggleClass('c-layout-fixed');
  $('#sidenavMain').removeClass('c-sidenav-folded');
});


// Fold main sidebar
$('#sidenavFoldToggle').on('click', function (e) {
  e.preventDefault();

  $('body').removeClass('c-layout-fixed c-layout-fixed-folded');
  $('#sidenavMain').removeClass('c-sidenav-hidden').toggleClass('c-sidenav-folded');
});


// Fold main sidebar (footer trigger)
$('#sidenavMainFoldToggle').on('click', function (e) {
  e.preventDefault();

  $('#sidenavMain').toggleClass('c-sidenav-folded');
});


// Folded sidebar and fixed layout
$('#fixedFoldToggle').on('click', function (e) {
  e.preventDefault();

  $('body').addClass('c-layout-fixed c-layout-fixed-folded');
  $('#sidenavMain').addClass('c-sidenav-folded');
});


// Toggle User in sidebar
$('#sidenavUserToggle').on('click', function (e) {
  e.preventDefault();
  $('#sidenavUser').toggleClass('c-sidenav-user-hidden');
});


// Toggle Dark sidebar
$('#sidenavDarkToggle').on('click', function (e) {
  e.preventDefault();
$('.c-sidenav').toggleClass('c-sidenav-dark');
});


// Toggle right action-panel
$('#actionPanelRightToggle').on('click', function (e) {
  e.preventDefault();

  $('#actionPanelRight').toggleClass('c-action-panel-visible');
});


// Toggle left action-panel
$('#actionPanelLeftToggle').on('click', function (e) {
  e.preventDefault();

  $('#actionPanelLeft').toggleClass('c-action-panel-visible');
});


// Toggle overlay action-panel
$('#actionPanelOverlayToggle').on('click', function (e) {
  e.preventDefault();

  $('#actionPanelOverlay').toggleClass('c-action-panel-visible');
});

// Toggle Dropdown
$(".c-sidenav-user-dropdown").on("click", function (e) {
  e.preventDefault();
  $('#user-nav').toggleClass('c-d-flex');
  $(this).toggleClass('c-d-flex');
});


// --------------------------------------------
// Sidebars Menu ----------------------------
// --------------------------------------------

// Define default class names and options
var navClass = 'c-sidenav-menu',
    navItemClass = 'c-sidenav-menu-item',
    navItemOpenClass = 'c-sidenav-menu-item-open',
    navLinkClass = 'c-sidenav-menu-link',
    navSubmenuClass = 'c-sidenav-submenu-group',
    navSlidingSpeed = 250;

    // Configure collapsible functionality
    $('.' + navClass).each(function() {
        $(this).find('.' + navItemClass).has('.' + navSubmenuClass).children('.' + navItemClass + ' > ' + '.' + navLinkClass).on('click', function (e) {
            e.preventDefault();

            // Simplify stuff
            var $target = $(this),
                $navSidebarMini = $('.c-sidenav-folded').find('.c-sidenav .' + navClass).children('.' + navItemClass);

            // Collapsible
            if($target.parent('.' + navItemClass).hasClass(navItemOpenClass)) {
                $target.parent('.' + navItemClass).not($navSidebarMini).removeClass(navItemOpenClass).children('.' + navSubmenuClass).slideUp(navSlidingSpeed);
            }
            else {
                $target.parent('.' + navItemClass).not($navSidebarMini).addClass(navItemOpenClass).children('.' + navSubmenuClass).slideDown(navSlidingSpeed);
            }

            // Accordion
            if ($target.parents('.' + navClass).data('nav-type') == 'accordion') {
                $target.parent('.' + navItemClass).not($navSidebarMini).siblings(':has(.' + navSubmenuClass + ')').removeClass(navItemOpenClass).children('.' + navSubmenuClass).slideUp(navSlidingSpeed);
            }
        });
    });

});
