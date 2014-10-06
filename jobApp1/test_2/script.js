window.onload = function(){
  bindListeners()
}


var toggled = false
var button = document.getElementById("toggleHead")
var header = document.getElementById("header")
var bindListeners = function(){
  button.onclick = function(){
    if(toggled === false) {
      header.style.display = "none";
      toggled = true;
    } else {
      toggled = false
      header.style.display = "block";
    }
  }
}