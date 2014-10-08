$(document).ready(function(){
 var steam = new Steam
 steam.ajaxRequest()
});
 var ajaxData = null;

var Steam = function(){
}

Steam.prototype = {
  ajaxRequest: function(){
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
  injectResponse: function() {
    $(".username").html(ajaxData.response.players[0].realname)
  }
}


