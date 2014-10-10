window.onload = function() {
}
  var prices = new Object()
  prices.item1 = ['saleprice', 'listprice']
  prices.item2 = [ null,'listprice']
  prices.item3 = ['saleprice3', 'listprice3']
  prices.item4 = ['saleprice4', null]

var priceStories = document.getElementsByClassName('priceStory')

var determine = function(){
  var j = 0
  for (i in prices) {
    if (prices[i][0] != null && prices[i][1] != null){
      var salePrice = getSale(prices[i][1]) - getSale(prices[i][0])
      priceStories[j].innerHTML = salePrice.toFixed(2) + " off!"
      j ++
    } else if (prices[i][0] == null ) {
      priceStories[j].innerHTML = "Not on sale"
      j ++
    } else if (prices[i][1] == null ) {
      priceStories[j].innerHTML = "On Sale!"
      j++
    }

  }
}

var getSale = function(element) {
  var price = (document.getElementById(element)).innerHTML
  price = parseFloat(price);
  return price
}

var explain = function(element) {
  document.querySelector("#explanation").innerHTML = "If an item is on sale it will have a sale price. The amound discounted is calclated by subtracting the sale price from the list price. If only a sale price is provided the item will be noted as being 'on sale!' If only a list price is provided the item will be noted as being 'Not on sale'"
}

determine()
explain()