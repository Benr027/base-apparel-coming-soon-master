var button = document.querySelector("button"),
  input = document.querySelector("input"),
  diserro = document.querySelector(".diserror"),
  erro = document.querySelector(".error");
var win = window,
  doc = document,
  docElem = doc.documentElement,
  body = doc.getElementsByTagName("body")[0],
  x = win.innerWidth || docElem.clientWidth || body.clientWidth;
if (x < 768) {
  var imgs = document.getElementById("hera");
  var logo = document.querySelector(".logo");
  var row = document.querySelector(".row");
  imgs.src = "./images/hero-mobile.jpg";
  imgs.className = "hero1";
  logo.style.bottom = "350px";
  row.style.top = "180px";
}
// check["pwd1"] = function () {
//     var pwd1 = document.getElementById("pwd1"),
//       tooltipStyle = getTooltip(pwd1).style;
//     if (pwd1.value.length >= 6) {
//       pwd1.className = "correct";
//       tooltipStyle.display = "none";
//       return true;
//     } else {
//       pwd1.className = "incorrect";
//       tooltipStyle.display = "inline-block";
//       return false;
//     }
//   };
function validateEmail(email) {
  const re =
    /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(email);
}
function visi(){
    diserro.style.visibility = "visible";
    erro.style.visibility = "visible";
    input.className = 'inputa';
}

input.addEventListener("input", () => {
  input = document.querySelector("input");
  if (!validateEmail(input.value)) {
   visi();
  } else {
    diserro.style.visibility = "hidden";
    erro.style.visibility = "hidden";
  }
});

button.addEventListener("click", (e) => {
  if (!validateEmail(input.value)) {
    visi();
    e.preventDefault();
  } else if (input.value == "") {
    e.preventDefault();
  }
});
