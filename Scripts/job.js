document.addEventListener("DOMContentLoaded", function () {
  var openPdfButton = document.getElementById("openPdfButton");

  if (openPdfButton) {
    openPdfButton.addEventListener("click", function () {
      var pdfPath = "Files/Stellenausschreibung.pdf";
      window.open(pdfPath, "_blank");
    });
  }
});

document.addEventListener("DOMContentLoaded", function () {
  var jobCard = document.getElementById("jobCard");
  var footer = document.getElementById("footer");

  function adjustPopupVisibility() {
    var footerRect = footer.getBoundingClientRect();
    var jobCardRect = jobCard.getBoundingClientRect();

    if (
      jobCardRect.bottom + window.scrollY >
      footerRect.top + window.scrollY - 20
    ) {
      jobCard.style.opacity = "0";
    } else {
      jobCard.style.opacity = "1";
    }
  }

  // Run the function on scroll and initially on page load
  window.addEventListener("scroll", adjustPopupVisibility);
  adjustPopupVisibility();
});
