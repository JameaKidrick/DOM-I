const time = document.querySelectorAll('.digits');
const tens = document.querySelector('#secondTens');
const ones = document.querySelector('#secondOnes');
const msHuns = document.querySelector('#msHundreds');
const msTens = document.querySelector('msTens');



function stop(){
    if(tens === 1 && ones === 0){
        break;
    }
}

function plusSecond(){
    window.setInterval(function(){
        for(let i = 0; i < 10; i++){
            return i;
        }
    }, 10);
    
}

plusSecond(ones);

// function plusSecond(){
  // window.setInterval(function(){
  // for(let i = 0; i < 10; i++){
  //   console.log(i);
  //     // ones.textContent = i;
  // }
  // }, 3000);

//   do {
//     console.log(i);
//     // ones.textContent = i;
//     window.setInterval(function(){
//       i++
//     }, 1000);
//   }
//   while(i<10);

// //   while(i < 10){
// //     window.setInterval(function(){
// //       // console.log(i);
// //       ones.textContent = i;
// //     }, 1000);

// //   }
// }

// plusSecond(ones);