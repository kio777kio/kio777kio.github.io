$(document).ready(function () {
  //WAYPOINTS TO ADJUST HEADER BACKGROUND
  $(".js-section-value-prop").waypoint(function (direction) {
    if (direction == "down") {
      $(".logo-black").addClass(
        "hidden"
      ); /* .addClass is a JS intrinic property */
      $(".logo-white").removeClass("hidden");
      $(`header`).addClass(`header-light`);
    } else {
      $(".logo-white").addClass(
        "hidden"
      ); /* .addClass is a JS intrinic property */
      $(".logo-black").removeClass("hidden");
      $(`header`).removeClass(`header-light`);
    }
  });

  //WAYPOINT ANIMATION FOR SLOGAN SECTION COOLCALMCOLLECTED LINE1

  $(".js-banner-clouds").waypoint(
    function (direction) {
      if (direction == "down") {
        $(".ccc-line1").addClass("animate__animated animate__fadeInDown");
        $(".ccc-line1").removeClass("hidden");
      }
    }
    /* { offset: "350px" } */
  );

  $(".js-banner-clouds").waypoint(function (direction) {
    if (direction == "down") {
      $(".ccc-line2").addClass("animate__animated animate__fadeInBottomLeft");
      $(".ccc-line2").removeClass("hidden");
    }
  });

  $(".js-banner-clouds").waypoint(function (direction) {
    if (direction == "down") {
      $(".ccc-line3").addClass("animate__animated animate__fadeInDown");
      $(".ccc-line3").removeClass("hidden");
    }
  });
}); //These connected to line1
