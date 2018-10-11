// let array = [1, -1, 5, 3, -7, 4, 5, 6, -100, 4]

function largestSubarraySum(arr){

  let maximum = 0
  let tester

  for (let i = 0; i < arr.length; i++) {

    tester = arr[i]
    maximum = Math.max(maximum, tester)

    for (let j = i+1; j < arr.length; j++) {
        tester = tester + arr[j]
        maximum = Math.max(maximum, tester)
    }
  }

  return maximum
}


// The second for loop does not work as intended
// function largestSubarraySum(arr){
//
//   let maximum = 0
//   let tester
//
//   for (let i = 0; i < arr.length; i++) {
//
//     tester = arr[i]
//     maximum = Math.max(maximum, arr[i])
//
//     for (let j = i+1; j < arr.length; j++) {
//         tester = tester + j
//         maximum = Math.max(maximum, arr[i])
//     }
//   }
//
//   return maximum
// }
