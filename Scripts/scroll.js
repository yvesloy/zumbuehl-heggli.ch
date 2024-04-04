$(document).ready(function () {
  $(document).on("scroll", $.debounce(onScroll, 100));

  $('.navigation a[href^="#"]').on("click", function (e) {
    e.preventDefault();
    var marginTop = 150;
    if ($(document).width() < 800) {
      var marginTop = 100;
    }
    console.log("Margin Top:", marginTop);
    console.log("Offset Top:", $(this.hash).offset().top);
    $("html, body")
      .stop()
      .animate({
        scrollTop: $(this.hash).offset().top - marginTop,
      });

    onScroll();
  });
});

function onScroll(event) {
  var firstFound = false;
  $(".navigation a").each(function () {
    var currentLink = $(this);
    var refElement = $(currentLink.attr("href"));
    if (!firstFound && isElementInViewport(refElement)) {
      currentLink.addClass("active");
      firstFound = true;
    } else {
      currentLink.removeClass("active");
    }
  });
}

function isElementInViewport(el) {
  if (typeof jQuery === "function" && el instanceof jQuery) {
    el = el[0];
  }

  var rect = el.getBoundingClientRect();

  return (
    rect.top >= -100 &&
    rect.left >= 0 &&
    rect.bottom <=
      (window.innerHeight + 100 ||
        document.documentElement.clientHeight + 100) &&
    rect.right <= (window.innerWidth || document.documentElement.clientWidth)
  );
}
