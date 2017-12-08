var x = 480;
var slider = document.getElementById("image-slider");
var slideArray = slider.getElementsByTagName("li");
var slideMax = slideArray.length - 1;
var curSlideNo = 0;

for (i = 0; i <= slideMax; i++) {
  if (i == curSlideNo) slideArray[i].style.left = 0;
  else slideArray[i].style.left = -x + "px";
}

slider.addEventListener('click', function () {
  changeSlide();
}, false);

var aniStart = false;
var next = 1;
var changeSlide = function(){
  if (aniStart === true) return;
  next = curSlideNo + 1;
  if (next > slideMax) next = 0;
  aniStart = true;
  sliding();
}

function sliding() {
  var curX = parseInt(slideArray[curSlideNo].style.left, 10);
  var nextX = parseInt(slideArray[next].style.left, 10);
  var newCurX = curX + 10;
  var newNextX = nextX + 10;
  if (newCurX >= x) {
    slideArray[curSlideNo].style.left = -x + "px";
    slideArray[next].style.left = 0;
    curSlideNo = curSlideNo + 1;
    if (curSlideNo > slideMax) curSlideNo = 0;
    aniStart = false;
    return;
  }
  slideArray[curSlideNo].style.left = newCurX + "px";
  slideArray[next].style.left = newNextX + "px";
  setTimeout(function () {
    sliding();
  }, 20);
}
setInterval(changeSlide,4000);
/*
function initMap() {
  var seoul = { lat : 37.566535, lng : 126.977969};
  var home = { lat : 37.478487, lng : 126.864288};
  var map = new google.maps.Map(document.getElementById('map'), {
    zoom :8,
    center : seoul
  });
  var marker = new google.maps.Marker({
    position: seoul,
    map : map
  });
  var marker2 = new google.maps.Marker({
    position: home,
    map : map
  });
}
*/
