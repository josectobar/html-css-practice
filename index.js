const el = document.getElementById("btn");
const elBody = document.getElementsByTagName("body");

el.onclick = function() {
  el.classList.toggle("transform-active");
  elBody[0].classList.toggle("transform-color");
};

window.onscroll = function() {
  scrollFn();
};
function scrollFn() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    document.getElementById("arrow").style.display = "block";
  } else {
    document.getElementById("arrow").style.display = "none";
  }
}

function moveTop() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}
