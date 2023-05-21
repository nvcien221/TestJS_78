
var array =[];

function addNumber() {
    var numberUnit = document.querySelector("#formInput").value ;
    array.push(numberUnit);
    document.querySelector("#showArray").innerHTML = array;
}
document.querySelector("#btnAdd").onclick = addNumber;



const btnResult = document.querySelectorAll(".dropdown-menu button");
btnResult.forEach(btnResult => {
  btnResult.addEventListener("click", function(event) {
  event.stopPropagation(); // Ngăn chặn sự kiện lan rộng đến phần tử cha (dropdown)
});
})


// Test1
function sum() {
    // event.preventDefault();
    var total = 0;
    for (var i = 0; i < array.length; i++) {
        if(array[i] > 0){
            total+=Number(array[i]);
        }
    }
    document.querySelector("#showArraySum").innerHTML = total;
    //console.log(total);
}   
document.querySelector("#calcSum").onclick = sum;


//Test2
function positiveNumber() {
  var total = 0;
  for (var i = 0; i < array.length; i++) {
    if(array[i] > 0){
        total ++;
    }
  }
  document.querySelector("#showPositiveNumbers").innerHTML = total;
}
document.querySelector("#calcPositiveNumbers").onclick = positiveNumber;


//test3
function minNumber() {
  var min = Math.min(...array);
  document.querySelector("#showMinNumber").innerHTML = min;
}

document.querySelector("#calcMinNumber").onclick = minNumber;

//test4


function minPositive() {
  var arrayPositive = [];
  for (var i = 0; i < array.length; i++) {
    if(array[i] > 0){
      arrayPositive.push(array[i]);
    }
  }
  //console.log("Mảng dương :",arrayPositive);
  var minPositiveNumber = Math.min(...arrayPositive);
  document.querySelector("#showMinPositiveNumber").innerHTML = minPositiveNumber;
}
document.querySelector("#calcMinPositiviveNumber").onclick = minPositive;


//test5
function findLastEvenNumber() {
  var tmpEven ;
  for (var i = 0; i < array.length; i++) {
    if(array[i]%2 == 0){
      tmpEven = array[i];
    }
  }
  document.querySelector("#showEvenNumber").innerHTML = tmpEven;
}
document.querySelector("#findLastEvenNumber").onclick = findLastEvenNumber;

//Test6
function changePlaces() {
  var value1 = document.querySelector(".changePlaces input:first-child").value ;
  var value2 = document.querySelector(".changePlaces input:nth-of-type(2)").value ;
  arrayCopy = [];
  for (var i = 0; i < array.length; i++) {
    arrayCopy.push(array[i]);
  }
  var tmp = arrayCopy[value1];
  arrayCopy[value1] = arrayCopy[value2];
  arrayCopy[value2] = tmp;

  console.log("Mảng duyệt đổi chỗ",arrayCopy);
  document.querySelector(".changePlaces .form-group #showArray").innerHTML = arrayCopy;
}
document.querySelector(".changePlaces button").onclick = changePlaces;


//Test7
function sortArray() {
  arrayCopy = [];
  for (var i = 0; i < array.length; i++) {
    arrayCopy.push(array[i]);
  }
  var result = arrayCopy.sort(function(a,b){
    return a - b;
  })
  document.querySelector(".sortUp .form-group #showArray").innerHTML = result;
}
document.querySelector(".sortUp button").onclick = sortArray;


//Test8
function checkPrime(n) {
  if (n <= 1) {
    return false;
  }
  for (var i = 2; i <= Math.sqrt(n); i++) {
    if (n % i === 0) {
      return false;
    }
  }
  return true;
}
function returnPrime() {
  for (var i = 0; i < array.length; i++) {
    if(checkPrime(array[i])){
      var primeNumber = array[i];
      break;
    }
  }
  document.querySelector(".prime #showArray").innerHTML = primeNumber;
}
document.querySelector(".prime button").onclick = returnPrime;


console.log("Mảng duyệt:", array);
//Test9
function checkInteger() {
  var count = 0;
  for (var i = 0; i < array.length; i++) {
    if (Number.isInteger(Number(array[i]))) {
      count++;
    }
  }
  document.querySelector(".integer #showArray").innerHTML = count;
}
document.querySelector(".integer button").onclick = checkInteger;

//Test10
function compareNumbers() {
  var positiveNumbers = 0;
  var negativeNumbers = 0;
  for (var i = 0; i < array.length; i++) {
    if(array[i] >= 0){
      positiveNumbers ++;
    }else{
      negativeNumbers++;
    }
  }
  if(positiveNumbers > negativeNumbers){
    document.querySelector(".compare #showArray").innerHTML = "Số dương > Số âm";
  }else if(positiveNumbers < negativeNumbers){
    document.querySelector(".compare #showArray").innerHTML = "Số dương < Số âm";
  }else{
    document.querySelector(".compare #showArray").innerHTML = "Số dương = Số âm";
  }
}
document.querySelector(".compare button").onclick = compareNumbers;