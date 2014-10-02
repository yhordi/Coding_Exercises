$(document).ready(function() {
  // var view = new View
  // var controller = new Controller(view)
  // controller.bindListeners()
  // $(init);
  //   function init() {
    $('#drag').draggable();

    $('#drop').droppable({
      accept: '#drag',
      activate: function( event, ui ) {}
    });
    $('#drop').on('dropover', function(e, ui){
      $(this).css("border", "5px solid lime"),
      $(this).html("<p>Like a 'MERICAN!</p>")
    } )
    $('#drop').on('dropout', function(e, ui){
      $(this).css("border", "1px solid black")
      $(this).html("NOT A COMMUNIST.")
    })
  // }
});

