/**
 A non-empty array A consisting of N integers is given.

 A permutation is a sequence containing each element from 1 to N once, and only once.

 For example, array A such that:

 A[0] = 4
 A[1] = 1
 A[2] = 3
 A[3] = 2
 is a permutation, but array A such that:

 A[0] = 4
 A[1] = 1
 A[2] = 3
 is not a permutation, because value 2 is missing.

 The goal is to check whether array A is a permutation.

 Write a function:

 function solution(A);
 that, given an array A, returns 1 if array A is a permutation and 0 if it is not.

 For example, given array A such that:

 A[0] = 4
 A[1] = 1
 A[2] = 3
 A[3] = 2
 the function should return 1.

 Given array A such that:

 A[0] = 4
 A[1] = 1
 A[2] = 3
 the function should return 0.

 Write an efficient algorithm for the following assumptions:

 N is an integer within the range [1..100,000];
 each element of array A is an integer within the range [1..1,000,000,000].
 **/

function solution(A) {
    let set = new Set(A);

    // Use the mathematical formula for sum of continuous integers
    // to get the difference between the current array and the theoretical perfect sum
    let currentArraySum = A.reduce((acc, curr) => acc + curr, 0);
    let expectedSumOfArrayValues = ((A.length) * (A.length + 1)) / 2;

    // If the lengths does not match, it means it contains duplicates
    // If the sum does not match, it means that elements do not match
    let areLengthsMatching = set.size === A.length;
    let areSumsMatching = currentArraySum === expectedSumOfArrayValues;

    return Number(areLengthsMatching && areSumsMatching);
}

console.log(solution([1, 1]));
console.log(solution([4, 1, 3, 2]));
console.log(solution([5, 2, 4, 3]));
console.log(solution([3, 4, 6, 2]));
console.log(solution([1, 2, 5, 7]));
console.log(solution([4, 1, 3]));