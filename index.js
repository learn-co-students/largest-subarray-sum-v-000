// QUADRATIC BRUTE FORCE SOLUTION

// const largestSubarraySum = array => {

//     let largest = array[0];

//     for (let i = 0; i < array.length; i++){
//         for (let j = i + 1; j < array.length; j++){
//             let currentSum = array.slice(i, j).reduce((accum, curr) => accum + curr, 0);
//             largest = largest > currentSum ? largest : currentSum;
//         }
//     }

//     return largest;
// }


// more optimal...
// LINEAR O(n) TIME

const largestSubarraySum = array => {

    let currentMax;
    let max;

    for (const [index, number] of array.entries()){

        if (index === 0){
            max = number;
            currentMax = number;
        } else {
            currentMax = Math.max(number, currentMax + number)
            max = Math.max(max, currentMax);
        }

    }

    return max;
}
