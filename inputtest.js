import input from './input.js'

//1.feladat
function getOtosLotteryNumbers() {
    const array = [];
    for(let i = 0; i <= 5; i++){
        let number = Math.floor(Math.random() * 90 ) +1
        if(!array.includes(number)){
            array.push(number)
        }
    }
    return array
}
getOtosLotteryNumbers()
//2.feladat
// function getSortedtLotteryNumbers(array){
//     array.sort(function(a, b){return a-b})
// }
// getSortedtLotteryNumbers();