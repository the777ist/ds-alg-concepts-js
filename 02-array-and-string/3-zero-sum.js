// The Multiple Pointers Pattern:
// Write a function called sumZero which accepts a sorted array of integers. 
// The function should find the first pair where the sum is 0. 
// Return an array that includes both values that sum to zero or undefined if a pair does not exist.

function zeroSum(arr) {
    let left = 0;
    let right = arr.length - 1;

    while (left < right) {
        let sum = arr[left] + arr[right];

        if (sum === 0) {
            return [arr[left], arr[right]];
        } else if (sum > 0) {
            right -= 1;
        } else if (sum < 0) {
            left += 1;
        }
    }
}

console.log(zeroSum([-2, 0, 1, 3]));