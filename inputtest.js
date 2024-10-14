//1.feladat
const guesses = [49, 67, 28, 16, 10];
function getOtosLotteryNumbers() {
    const array = [];
    for(let i = 0; i <= 4; i++){
        let number = Math.floor(Math.random() * 90 ) +1
        if(!array.includes(number)){
            array.push(number);
        }
    }
    return array;
}
const lotteryNumbers = getOtosLotteryNumbers();
console.log(lotteryNumbers)
//2.feladat
function getSortedtLotteryNumbers(lotteryNumbers){
    return lotteryNumbers.sort((a, b) => (a < b ? -1 : 1))
}
console.log(getSortedtLotteryNumbers(lotteryNumbers));
//3.feladat
function getNumberOfHits(lotteryNumbers, guesses){
    let hits = 0;
    for (let number of guesses){
        if (lotteryNumbers.includes(number)){
            hits++;
        }
    }
    return hits;

}
console.log(`A tippek: ${guesses}`)
console.log(`A megegyező tippek száma: ${getNumberOfHits(lotteryNumbers, guesses)}`);
//4. feladat
const weekly = [];
function getWeeklyLotteryArrayNumbers(weekly){
    for(let i = 0; i < 4; i++){
        let lottery = getOtosLotteryNumbers();
        weekly.push(lottery)
    }
    return weekly;
}
console.log(getWeeklyLotteryArrayNumbers(weekly));