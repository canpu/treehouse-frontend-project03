/* Make the dropdown menu grey when no state selected */
$("#state").css("color", "#555");
$("#state").on("change", function() {
    $(this).css("color", "black");
});

/* Make items fade in when in the view */
$fadeInItems = $(".fade-item");
$fadeInItems.css("opacity", "0");

function fadeInElements() {
  let windowHeight = window.innerHeight;
  let windowTopPosition = $(window).scrollTop();
  let windowCenterPosition = windowTopPosition + windowHeight / 2.0;

  function fadeIn ($item) {
    let itemTopPosition = $item.offset().top;
    let itemCenterPosition = itemTopPosition + $item.height() / 2.0;
    if (Math.abs((itemCenterPosition - windowCenterPosition) / windowHeight) < 0.4) {
      $item.animate({opacity: 1}, 1250);
    }
  }

  for (let i = 0; i < $fadeInItems.length; i++) {
    let $item = $($fadeInItems[i]);
    fadeIn($item);
  }
}

fadeInElements();

$(window).scroll(function () {
  fadeInElements();
});
