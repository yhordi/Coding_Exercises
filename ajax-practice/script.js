// Steam api Key: 7EE993F9E83B5EB4599758D53E0074F1
$(document).ready(function(){
 var steam = new Steam
 steam.getId()
});
var Steam = function(){
}

Steam.prototype = {
  getId: function(){
    // this.createCORSRequest()
    $.ajax({
      url: "http://api.steampowered.com/ISteamUser/GetPlayerSummaries/v0002/",
      data: {
        key: '7EE993F9E83B5EB4599758D53E0074F1',
        steamids: '76561197985852059'
      },
      dataType: 'get',
      success: function (data) {
        $.parseJSON (data);
        response = data;
        console.log('SUCCESS!', response, data);
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
  //   // Check if the XMLHttpRequest object has a "withCredentials" property.
  //   // "withCredentials" only exists on XMLHTTPRequest2 objects.
  //   xhr.open(method, url, true);
  // } else if (typeof XDomainRequest != "undefined") {
  //   // Otherwise, check if XDomainRequest.
  //   // XDomainRequest only exists in IE, and is IE's way of making CORS requests.
  //   xhr = new XDomainRequest();
  //   xhr.open(method, url);
  // } else {
  //   // Otherwise, CORS is not supported by the browser.
  //   xhr = null;
  // }
  // return xhr;
  // },

  // var xhr = createCORSRequest('GET', url);
  // if (!xhr) {
  //   throw new Error('CORS not supported');
  // },
}