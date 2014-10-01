var View = function() {
}

View.prototype = {
  drop: function ( event ) {
    debugger
    console.log("buttz"),
    $( this ).append('<li>buttz</li>')
  }
}