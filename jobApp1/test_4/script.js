window.onload = function(){
}
var page = document.querySelector("#numbersContainer")
var fizzbuzz = function(){
  for (var i = 1; i < 101; i++){
    console.log(i)
    if (i % 3 == 0) {
      document.write("Fizz" + ", ")
    } else if (i % 5 === 0) {
      document.write("Buzz" + ", ")
    } else if (i % 3 === 0 && i % 5 == 0) {
      document.write("FizzBuzz" + ", ")
    } else {
      document.write(i + ", ")
    }
  }
}
fizzbuzz()