$(".openNav").click(function () {
  const leftMenu = $("#leftMenu");
  const homeContent = $("#home-content");
  const toggleNav = $(".toggleNav");

  if (leftMenu.width() === 0) {
    // Open the menu
    leftMenu.animate({ width: "250px" }, 50);
    homeContent.animate({ marginLeft: "250px" }, 50);
    toggleNav.text("close");
  } else {
    // Close the menu
    leftMenu.animate({ width: "0px" }, 50);
    homeContent.animate({ marginLeft: "0px" }, 50);
    toggleNav.text("open");
  }
});

$(".closebtn").click(function () {
  $("#leftMenu").animate({ width: "0px" }, 50);
  $("#home-content").animate({ marginLeft: "0px" }, 50);
});

//  scrolling
$("#leftMenu a")
  .not(".closebtn")
  .click(function (e) {
    const sectionId = $(e.target).attr("href");

    const sectionOffset = $(sectionId).offset().top;
    $("html, body").animate({ scrollTop: sectionOffset }, 500);
  });

// Accordion
$("#sliderDown .toggle").click(function (e) {
  $(".inner").not($(e.target).next()).slideUp(500);
  $(e.target).next().slideToggle(500);
});

// Countdown timer
const targetDate = new Date("Dec 25, 2024 21:00:00").getTime();
setInterval(function () {
  const now = new Date().getTime();
  const distance = targetDate - now;

  const days = Math.floor(distance / (1000 * 60 * 60 * 24));
  const hours = Math.floor(
    (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
  );
  const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((distance % (1000 * 60)) / 1000);

  $(".days").text(days);
  $(".hours").text(hours);
  $(".minutes").text(minutes);
  $(".seconds").text(seconds);
}, 1000);

// Character counter
$("textarea").keyup(function () {
  const max = 100;
  const length = $(this).val().length;
  const remaining = max - length;
  $("#chars").text(remaining);
});
