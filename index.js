document.querySelector(".no").addEventListener("mouseover", function () {
  var above = Math.floor(Math.random() * 20);
  var lef = Math.floor(Math.random() * 20);
  document.querySelector(".box").style.position = "absolute";
  document.querySelector(".box").style.top = above + "rem";
  document.querySelector(".box").style.left = lef + "rem";
});

document.querySelector(".no").addEventListener("click", function () {
  var above = Math.floor(Math.random() * 20);
  var lef = Math.floor(Math.random() * 10);
  document.querySelector(".box").style.position = "absolute";
  document.querySelector(".box").style.top = above + "rem";
  document.querySelector(".box").style.left = lef + "rem";
});

document.querySelector(".yes").addEventListener("click", function () {
  alert("I Love YOU Tooooo😍....... UMMA....");
});
