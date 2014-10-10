$(document).ready(function() {
  ajaxRequest()
  var response = null;
});




var ajaxRequest = function(e){
    var here = this
    $.ajax({
      dataType: 'Json',
      type: 'get',
      url: "http://jordankamin.com/recs.txt",
      success: function (data) {
      },
      error: function (bug) {
        console.log(bug)
      },
      complete:function (data) {
        var status = data.status
        response = $.parseJSON(data.responseText);
        parseDataViewed()
        parseDataBought()
      }
    })
  }

var parseDataBought = function(){
  var $products = $('.productWrapper')
  var $names = $('.productWrapper :nth-child(2)')
  var $prices = $('.productWrapper :nth-child(3)')
  var recs = response.placements[1].recs
  $('img').attr('src', recs[0].img)
  for (var i in recs) {
    $($names[i]).html(recs[i].name);
    $($prices[i]).html(recs[i].price);
  }
}

var parseDataViewed = function(){
  var $products = $('.viewed')
  var $names = $('#viewed :nth-child(2)')
  var $prices = $('#viewed :nth-child(3)')
  var recs = response.placements[0].recs
  for (var i in recs) {
    $($names[i]).html(recs[i].name);
    $($prices[i]).html(recs[i].price);
  }
}