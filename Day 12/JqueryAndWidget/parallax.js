$(window).on("scroll", function () {
    var parallax = $(".parallax");
    var scrollPosition = $(this).scrollTop();
    parallax.css("transform", "translateY(" + scrollPosition * 0.7 + "px" + ")");
  });

var map = L.map('map').setView([-6.1752251185077816, 106.8271579268852], 13);
L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);
var marker = L.marker([-6.1752251185077816, 106.8271579268852]).addTo(map);
  