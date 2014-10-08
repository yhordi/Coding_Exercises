$(document).ready(function(){
  var steam = new Steam
  var controller = new Controller(steam)
  controller.bindListeners()
  var ajaxData = null;
});


var Steam = function(){
}

Steam.prototype = {
  ajaxRequest: function(e){
    $.ajax({
      dataType: 'Json',
      type: 'get',
      url: "http://api.steampowered.com/ISteamUser/GetPlayerSummaries/v0002/",
      data: {
        key: 'E6B0ADB9B2C8C41CC3A0D86C3F235406',
        steamids: '76561197985852059',
      },
      success: function (data) {
        ajaxData = data
        console.log('SUCCESS!');
        Steam.prototype.injectResponse(ajaxData)
      },
      error: function (bug) {
        console.log(bug)
      },
      complete:function (data) {
        var status = data.status
        response = $.parseJSON(data.responseText);
      }
    })
  },
  injectResponse: function(data) {
    $(".username").html(data.response.players[0].realname)
  }
}

