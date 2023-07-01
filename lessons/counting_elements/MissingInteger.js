/**
 This is a demo task.

 Write a function:

 function solution(A);
 that, given an array A of N integers, returns the smallest positive integer (greater than 0) that does not occur in A.

 For example, given A = [1, 3, 6, 4, 1, 2], the function should return 5.

 Given A = [1, 2, 3], the function should return 4.

 Given A = [−1, −3], the function should return 1.

 Write an efficient algorithm for the following assumptions:

 N is an integer within the range [1..100,000];
 each element of array A is an integer within the range [−1,000,000..1,000,000].
 */

function solution(A) {
    let integerSet = new Set(A);
    let iterator = 1

    // For this case, we use set to first reduce the size of the array to remove duplicates
    // then we loop given the integer range (incrementing by 1 each time)
    // if a given integer does not exist, then that is the minimum missing integer
    while (iterator <= 1000000) {
        if (!integerSet.has(iterator)) return iterator;
        iterator++;
    }
}

console.log(solution( [1, 3, 6, 4, 1, 2])); //5
console.log(solution( [1, 2, 3])); //4
console.log(solution([-1, -3])); //1