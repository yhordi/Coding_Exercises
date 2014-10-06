// Steam api Key: 7EE993F9E83B5EB4599758D53E0074F1
$(document).ready(function(){
 var steam = new Steam
 steam.getStuff()
});
var Steam = function(){
}

Steam.prototype = {
  getStuff: function(){
    // this.createCORSRequest()
    // this.makeCORSRequest()
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
        response = data;
        console.log('SUCCESS!', response, data);
        $.parseJSON (data);
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
  // createCORSRequest: function(method, url) {
  //   var xhr = new XMLHttpRequest();
  //   if ("withCredentials" in xhr) {
  //       xhr.open(method, url, true);
  //   } else if (typeof XDomainRequest != "undefined") {
  //       xhr = new XDomainRequest();
  //       xhr.open(method, url);
  //   } else {
  //       xhr = null;
  //   }
  //   return xhr;
  // },
  // makeCORSRequest: function() {
  //   var url = 'http://api.steampowered.com/ISteamUser/GetPlayerSummaries/v0002/';
  //   var xhr = this.createCORSRequest('GET', url);
  //   if (!xhr) {
  //       alert('CORS not supported');
  //       return;
  //   }
  //   xhr.onload = function() {
  //     var text = xhr.responseText;
  //   };
  //   xhr.onerror = function() {
  //     console.log('Woops, there was an error making the request.');
  //   };
  //   xhr.send();
  // }
}