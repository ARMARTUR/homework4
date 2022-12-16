// 1. Given an array of integers, find the pair of adjacent elements that has the largest product and
// return that product.




let arr = [7, 3, 4, 5, 6, 7, 8, 9]
function biggestProductOfDigits(arr) {
    let biggestProduct = arr[0] * arr[1]
    for (let i = 0; i < arr.length; i++) {
        let product = arr[i] * arr[i + 1]
        if (product > biggestProduct) {
            biggestProduct = product
        }
    };
    return biggestProduct
};

console.log(biggestProductOfDigits(arr))








// 2. Given an array of integers. All numbers are unique. Find the count of missing numbers between
// minimum and maximum elements to make integers sequence.




function findMissedNumbers(arr) {
    let secondArr = arr.sort(function (a, b) {
        if (a > b) {
            return 1
        } else {
            return -1
        }

    })


    let sum = 0
    for (let i = 0; i < secondArr.length; i++) {
        let minus = arr[i + 1] - arr[i]
        if (minus > 1) {
            sum += minus - 1
        }

    }

    return sum
}
console.log(findMissedNumbers(arr))











// 4. Insert a n positive number. Print the n-st prime number.

let arrayOfPrimeNumbers = [1, 2, 3, 5, 7, 11]
let num = 5
function prime(num) {
    console.log(arrayOfPrimeNumbers[num])
}
prime(num)
