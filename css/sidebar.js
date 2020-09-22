function openNav() {
  // document.getElementById("mySidebar").style.width = "250px";
  // document.getElementById("main").style.marginLeft = "0px";

  var main = document.getElementById("mySidebar");
  if (main.style.width == '250px') {
    main.style.width = '0';
    main.style.opacity = 0;
  } else {
    main.style.width = "250px";
    main.style.opacity = 1;
  }
}

function closeNav() {
  document.getElementById("mySidebar").style.width = "0";
  document.getElementById("main").style.marginLeft= "0";
}
