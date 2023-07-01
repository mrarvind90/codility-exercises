/**
 You are given N counters, initially set to 0, and you have two possible operations on them:

 increase(X) − counter X is increased by 1,
 max counter − all counters are set to the maximum value of any counter.
 A non-empty array A of M integers is given. This array represents consecutive operations:

 if A[K] = X, such that 1 ≤ X ≤ N, then operation K is increase(X),
 if A[K] = N + 1 then operation K is max counter.
 For example, given integer N = 5 and array A such that:

 A[0] = 3
 A[1] = 4
 A[2] = 4
 A[3] = 6
 A[4] = 1
 A[5] = 4
 A[6] = 4
 the values of the counters after each consecutive operation will be:

 (0, 0, 1, 0, 0)
 (0, 0, 1, 1, 0)
 (0, 0, 1, 2, 0)
 (2, 2, 2, 2, 2)
 (3, 2, 2, 2, 2)
 (3, 2, 2, 3, 2)
 (3, 2, 2, 4, 2)
 The goal is to calculate the value of every counter after all operations.

 Write a function:

 function solution(N, A);
 that, given an integer N and a non-empty array A consisting of M integers, returns a sequence of integers representing the values of the counters.

 Result array should be returned as an array of integers.

 For example, given:

 A[0] = 3
 A[1] = 4
 A[2] = 4
 A[3] = 6
 A[4] = 1
 A[5] = 4
 A[6] = 4
 the function should return [3, 2, 2, 4, 2], as explained above.

 Write an efficient algorithm for the following assumptions:

 N and M are integers within the range [1..100,000];
 each element of array A is an integer within the range [1..N + 1].
 **/

function solution(N, A) {
    let counters = Array(N).fill(0);
    let maxValue = 0;
    let lastMaxValue = 0;

    for (let i = 0; i < A.length; i++) {
        if (A[i] >= 1 && A[i] <= N) {
            // If the value is less than or equal to N
            // We first check if it matches the lastMaxValue because
            // the previous operation could be a max_operation, if it is we update the sum using lastMaxValue
            // else we just increment the counters as per normal
            if (counters[A[i] - 1] < lastMaxValue) {
                counters[A[i] - 1] = lastMaxValue + 1;
            } else {
                counters[A[i] - 1]++;
            }

            maxValue = Math.max(maxValue, counters[A[i] - 1]);
        } else {
            // We need this else statement because we only want to use maxValue
            // if the value of A[i] === N + 1
            // There can be cases where there is a max value but there is no max_operations
            lastMaxValue = maxValue;
        }
    }

    // We need to loop one more time because there can be elements that were not updated the first time round
    // So we set the value to lastMaxValue instead of incrementing
    // Because there could be elements there were incremented before a max_operation but never appears
    // again in the array, so in that case, the value should be lastMaxValue
    // For cases where the element does appear again in the array, it is handled in the first loop
    for (let i = 0; i < N; i++) {
        if (counters[i] < lastMaxValue) {
            counters[i] = lastMaxValue;
        }
    }

    return counters;
}

console.log(solution(5, [3, 4, 4, 6, 1, 4, 4]));
console.log(solution(5, [1, 6, 6, 6, 6, 6, 6]));
console.log(solution(5, [1, 2, 3, 4, 3, 2, 1]));
console.log(solution(5, [3, 4, 4, 5, 1, 4, 4]));
console.log(solution(5, [6, 6, 6, 6, 6, 6, 6]));
