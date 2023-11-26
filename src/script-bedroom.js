function myFunction(el) {
  var x = document.getElementById(el);
  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }
}
