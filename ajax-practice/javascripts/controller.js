function Controller(steam) {
  this.steam = new Steam()
}

Controller.prototype = {
  bindListeners: function() {
    $gobutton = $('.go')
    $gobutton.click(this.steam.ajaxRequest.bind(this))
  }
}