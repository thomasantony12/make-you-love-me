document.querySelector(".no").addEventListener("mouseover", function () {
  var above = Math.floor(Math.random() * 750);
  var lef = Math.floor(Math.random() * 750);
  document.querySelector(".box").style.position = "absolute";
  document.querySelector(".box").style.top = above + "px";
  document.querySelector(".box").style.left = lef + "px";
});

document.querySelector(".no").addEventListener("click", function () {
  var above = Math.floor(Math.random() * 750);
  var lef = Math.floor(Math.random() * 750);
  document.querySelector(".box").style.position = "absolute";
  document.querySelector(".box").style.top = above + "px";
  document.querySelector(".box").style.left = lef + "px";
});

document.querySelector(".yes").addEventListener("click", function () {
  alert("I Love YOU Tooooo😍....... UMMA....");
});
