/**
 An array A consisting of N different integers is given. The array contains integers in the range [1..(N + 1)], which means that exactly one element is missing.

 Your goal is to find that missing element.

 Write a function:

 function solution(A);
 that, given an array A, returns the value of the missing element.

 For example, given array A such that:

 A[0] = 2
 A[1] = 3
 A[2] = 1
 A[3] = 5
 the function should return 4, as it is the missing element.

 Write an efficient algorithm for the following assumptions:

 N is an integer within the range [0..100,000];
 the elements of A are all distinct;
 each element of array A is an integer within the range [1..(N + 1)].
 **/

function solution(A) {
    // To handle empty array and array with 1 element which is the number 1
    if (!A.length) return 1;

    // Use the mathematical formula for sum of continuous integers
    // to get the difference between the current array and the theoretical perfect sum
    let currentArraySum = A.reduce((acc, curr) => acc + curr, 0);
    let perfectSum = ((A.length + 1) * (A.length + 2)) / 2;

    return perfectSum - currentArraySum;
}

console.log(solution([]));
console.log(solution([1]));
console.log(solution([2, 1]));
console.log(solution([2, 3, 1, 5]));
console.log(solution([2, 4, 1]));
console.log(solution([2, 3, 1, 4]));
