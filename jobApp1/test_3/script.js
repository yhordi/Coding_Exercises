$(document).ready(function(){
  bindListeners()
})

var bindListeners = function(){
  $("#toggleFoot").on("click", toggleFooter)
}
var toggled = false
var toggleFooter = function(){
  if(toggled === false) {
    $("#footer").hide()
    toggled = true
  } else {
    $("#footer").show();
    toggled = false
  }
}
