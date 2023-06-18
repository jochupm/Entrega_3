/* Toggle between adding and removing the "responsive" class to topnav when the user clicks on the icon */
function myFunction() {
    var x = document.getElementById("menu-1");
    if (x.className === "menu-1") {
      x.className += " responsive";
    } else {
      x.className = "menu-1";
    }
  }