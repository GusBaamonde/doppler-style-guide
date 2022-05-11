import $ from "jquery";
import "./MenuItemLinks";
import "./PopupMenuLinks";
import { Menubutton } from "./dropdown";

$("body")
  .on(
    {
      mouseenter: function () {
        const submenu = $(this).find(".sub-menu");

        if (!$(this).hasClass("submenu-item")) {
          $(".header-main").removeClass("header-open");
        }

        if (submenu[0] && submenu[0].children.length) {
          $(".header-main").addClass("header-open");
        } else {
          $(".sub-menu.open").removeClass("open");
        }
      },
      mouseleave: function () {
        if ($(".header-main .submenu-item > a.active").length > 0) {
          $(".header-main").addClass("header-open");
          $(".header-main .submenu-item > a.active + .sub-menu").addClass(
            "open"
          );
        } else {
          $(".header-main").removeClass("header-open");
        }
      },
    },
    ".menu-main>li"
  )
  .on("click", ".user-menu--open", function () {
    $(this).parent().find(".user-menu").toggleClass("open");
  })
  .on("click", "#open-menu", function () {
    $(".header-main").addClass("open");
  })
  .on("click", "#close-menu", function () {
    $(".header-main").removeClass("open");
  })
  .on("click", ".close-user--menu", function () {
    $(".user-menu").removeClass("open");
  })
  // module accordion
  .on("click", ".dp-accordion .dp-accordion-thumb", function (e) {
    e.preventDefault();
    $(this).parent().toggleClass("active");
    $(this).parent().find(".dp-accordion-panel").slideToggle();
  });

$(document).on("mouseup", function (e) {
  const menu = $(".user-menu");
  if (!menu.is(e.target) && menu.has(e.target).length === 0) {
    menu.removeClass("open");
  }
});

$(() => {
  // modals
  const $delayFade = 500;
  //Initialize all modals hidden
  $(".modal").hide();
  $("#btn-exclude-list").click(function () {
    $("#modal-exclude-list").fadeIn($delayFade);
  });
  $("#btn-exclude-nolist").click(function () {
    $("#modal-exclude-nolist").fadeIn($delayFade);
  });
  $("#btn-error-list").click(function () {
    $("#modal-error-list").fadeIn($delayFade);
  });
  $("#btn-modal-large").click(function () {
    $("#modal-large").fadeIn($delayFade);
  });
  $("#btn-modal-medium").click(function () {
    $("#modal-medium").fadeIn($delayFade);
  });
  $("#btn-modal-small").click(function () {
    $("#modal-small").fadeIn($delayFade);
  });
  $(".modal .close").click(function () {
    $(".modal").fadeOut();
  });

  // This script is ONLY to DEMONSTRATE how to show and hide password, not use in production
  $(".show-hide").click(function () {
    $(this).toggleClass("ms-icon icon-hide");
    const input = $($(this).attr("toggle"));

    if (input.attr("type") === "password") {
      input.attr("type", "text");
      $("span.content-eye").text("Ocultar");
      $(this).removeClass("ms-icon icon-view").addClass("ms-icon icon-hide");
    } else {
      input.attr("type", "password");
      $("span.content-eye").text("Mostrar");
      $(this).removeClass("ms-icon icon-hide").addClass("ms-icon icon-view");
    }
  });

  $(".dp-number-campaign").each(function () {
    $(this)
      .prop("Counter", 0)
      .animate(
        {
          Counter: $(this).text(),
        },
        {
          duration: 3500,
          easing: "swing",
          step: function (now) {
            $(this).text(Math.ceil(now).toFixed(1));
          },
        }
      );
  });

  // module tabs
  $(".tab--item a").each(function (index) {
    $(this).on("click", function (e) {
      e.preventDefault();
      const $index = index + 1;
      $(".tab--item a, .tab--content").removeClass("active");
      $(this).closest(".nav-tabs").attr("data-tab-active", $index);
      $(this).addClass("active");
      $(".tab--content:nth-child(" + $index + ")").addClass("active");
      $(".tab--content .dp-plan-detail").slideUp();
    });
  });

  // Doppler plus - Plans details
  $(".dp-compare-details-plans").on("click", function (e) {
    e.preventDefault();
    $(this).toggleClass("dp-open-compare");
    $(".dp-plan-detail").slideToggle();
  });

  // Slider sample one
  $(".progress-bar").each(function (index) {
    const $max = $(this).find(".range-slider").attr("max");
    $(this)
      .find(".range-slider")
      .on("change input", function () {
        const $quote = $(this).val(),
          $progress = ($quote * 100) / $max,
          $parent = $(this).parent();

        $parent.find(".progress-anchor").css("width", $progress + "%");
        $(this).attr("data-value", this.value);
      })
      .trigger("change");
  });

  /* nested table | expand results */
  $(".dp-expand-results").on("click", function (e) {
    e.preventDefault();
    $(this).toggleClass("dp-open-results");
    $(this).closest("tr").next().toggleClass("show");
  });

  // Tips
  $(".dp-show-tips").on("click", function () {
    $(this).closest(".field-item").next(".dp-advice").slideToggle();

    var $showPanelLink = $(this).find(".dp-show-text");
    if ($(this).find(".icon-close").hasClass("rotation")) {
      $showPanelLink.html($(this).attr("data-text-hide"));
    } else {
      $showPanelLink.html($(this).attr("data-text-show"));
    }
    $(this).find(".icon-close").toggleClass("rotation");
  });
  // Carousel
  $(".dp-carousel-dot").change(function () {
    var slideId = $(this).val();
    var carrousel = $(this).closest(".dp-carousel").prop("id");
    $("#" + carrousel + " .dp-carousel-slide").removeClass("active");
    $(
      "#" + carrousel + " .dp-carousel-slide[data-order=" + slideId + "]"
    ).addClass("active");
  });
});

// Content | Custom field | emojis
$(() => {
  $(".dp-bd-box .dp-button-bd").on("click", function () {
    $(".dp-content-bd").hide();
    $(".dp-button-bd").removeClass("active");
    $(this).addClass("active");
    $(this).parent().find(".dp-content-bd").show();
  });

  $(document).on("click", function (e) {
    const $contentBd = $(".dp-content-bd");
    const buttonBd = $(".dp-button-bd");

    if (
      !$contentBd.is(e.target) &&
      $contentBd.has(e.target).length === 0 &&
      !buttonBd.is(e.target) &&
      buttonBd.has(e.target).length === 0
    ) {
      $contentBd.hide();
      buttonBd.removeClass("active");
    }
  });
});

// Button Exit editor
$(() => {
  $(".dp-button-box .dp-button-exit").on("click", function () {
    $(this).toggleClass("active");
    if ($(this).hasClass("active")) {
      $(this).parent().find(".dp-content-menu").show();
    } else {
      $(this).parent().find(".dp-content-menu").hide();
    }
  });

  $(document).on("click", function (e) {
    const $contentMenu = $(".dp-content-menu");
    const $buttonExit = $(".dp-button-exit");

    if (
      !$contentMenu.is(e.target) &&
      $contentMenu.has(e.target).length === 0 &&
      !$buttonExit.is(e.target) &&
      $buttonExit.has(e.target).length === 0
    ) {
      $contentMenu.hide();
      $buttonExit.removeClass("active");
    }
  });
});

// for all functions use dopplerUI namespace
if (!window.dopplerUI) {
  window.dopplerUI = {};
}
window.dopplerUI.createDoubleSlide = function (element1, element2) {
  $(element1).on("input", function () {
    const label = $(this).attr("data-label");
    const maxThumb = $(this).parent().find(".thumb-2")[0];
    this.value = Math.min(this.value, maxThumb.value - 2);
    const totalSteps = parseInt(this.max) - parseInt(this.min);
    const percent =
      (100 / totalSteps) * parseInt(this.value) -
      (100 / totalSteps) * parseInt(this.min);
    const $container = $(this).parent();
    $container.find("div[inverse-left]").css("width", percent + "%");
    $container
      .find("div[range]:first,div[sign-one],span[thumb]:first")
      .css("left", percent + "%");
    $container.find("div[sign-one] span").text(this.value + label);
  });

  $(element2).on("input", function () {
    const label = $(this).attr("data-label");
    const minThumb = $(this).parent().find(".thumb-1")[0];
    this.value = Math.max(this.value, minThumb.value - -2);
    const totalSteps = parseInt(this.max) - parseInt(this.min);
    const percent =
      (100 / totalSteps) * parseInt(this.value) -
      (100 / totalSteps) * parseInt(this.min);
    const $container = $(this).parent();
    $container.find("div[inverse-right]").css("width", 100 - percent + "%");
    $container.find("div[range]:last").css("right", 100 - percent + "%");
    $container
      .find("div[sign-two],span[thumb]:last")
      .css("left", percent + "%");
    $container.find("div[sign-two] span").text(this.value + label);
  });
};
window.Menubutton = Menubutton;
