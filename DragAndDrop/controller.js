function Controller(view) {
  this.view = new View()
}

Controller.prototype = {
  bindListeners: function() {
    $('.drop').droppable(this.view.drop());
    $('.drag').draggable();
  }
}