var skills = document.getElementById("skills");
var skillsHeight = skills.clientHeight;
var navbar = document.getElementById("navbar");
var sticky = navbar.offsetTop;

window.onscroll = function() {
  myFunction();
};

function myFunction() {
  var elm = document.getElementsByClassName("fill");
  var length = elm.length;
  for (var i = 0; i < length; i++) {
    if (inView) {
      elm[i].classList.add("animate");
    }
  }
  if (window.pageYOffset >= sticky) {
    navbar.classList.add("sticky");
  } else {
    navbar.classList.remove("sticky");
  }
}

function inView() {
  var windowHeight = window.innerHeight;
  var scrollY = window.scrollY || window.pageYOffset;
  var scrollPosition = scrollY + windowHeight;
  var elementPosition =
    skills.getBoundingClientRect().top + scrollY + skillsHeight;
  if (scrollPosition > elementPosition) {
    return true;
  } else {
    return false;
  }
}

function openNav() {
  document.getElementById("mySidenav").style.width = "250px";
}

function closeNav() {
  document.getElementById("mySidenav").style.width = "0";
}
