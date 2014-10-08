function Controller(steam) {
  this.steam = new Steam()
}

Controller.prototype = {
  bindListeners: function() {
    console.log("bindListeners called!")
    $gobutton = $('.go')
    $gobutton.click(this.steam.ajaxRequest.bind(this))
  }
}