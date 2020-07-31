// document.getElementById('generate').addEventListener('click', function(){
//     var fourDigitPin = getRandomNum(1000,9999);
//     // var digitPin = Math.random(1000,9999) *1000;
//     // var showPin = digitPin;
//     document.getElementById('generate-value').value = fourDigitPin; 
// })   
// function getRandomNum(min, max){
//    min = Math.ceil(min);
//    max = Math.floor(max);
//    return Math.floor ( Math.random() * (max - min +1)) + min;
// }

//   document.getElementById('screen-input').value = '';
// // console.log('button is clicked');
// function btnClick(number){
//     var viewScreen = document.getElementById('screen-input');
//      viewScreen.value += number;
//      if( number == ''){
//          viewScreen.value = number;
//      }
//      notify();
// }

// function del(){
//     var viewScreen = document.getElementById('screen-input').value;
//     var backSpace = viewScreen.slice(0, viewScreen.length - 1);
//     document.getElementById('screen-input').value = backSpace;
    
// }

// function notify(){
//     document.getElementById("right").style.display="none";
//     document.getElementById("wrong").style.display = "none";
// }

// document.getElementById('submitButton').addEventListener('click',function(){
//     if(document.getElementById('generate-value').value ==  document.getElementById('screen-input').value){
//         var pinMatch = document.getElementById("right");
//         pinMatch.style.display = "block";
//     }
//     else{
//         var pinMisMatch = document.getElementById("wrong");
//         pinMisMatch.style.display = "block";
//     }
// })