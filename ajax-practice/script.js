$(document).ready(function(){
 var steam = new Steam
 var ajaxData
 steam.getData()
});
var Steam = function(){
}

Steam.prototype = {
  getData: function(){
    $.ajax({
      dataType: 'Json',
      type: 'get',
      useDefaultXhrHeader: false,
      url: "http://api.steampowered.com/ISteamUser/GetPlayerSummaries/v0002/",
      data: {
        key: 'E6B0ADB9B2C8C41CC3A0D86C3F235406',
        steamids: '76561197985852059',
      },
      success: function (data) {
        ajaxData = data;
        console.log('SUCCESS!');
        responseData = $.parseJSON (data);

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
}

var dataParse = function(){
  $(".username").append(ajaxData.response.players[0].realname)
}

