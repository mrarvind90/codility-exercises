/**
Binary Gap
===========

A binary gap within a positive integer N is any maximal sequence of consecutive zeros that is surrounded by ones at both ends in the binary representation of N.

For example, number 9 has binary representation 1001 and contains a binary gap of length 2. The number 529 has binary representation 1000010001 and contains two binary gaps: one of length 4 and one of length 3. The number 20 has binary representation 10100 and contains one binary gap of length 1. The number 15 has binary representation 1111 and has no binary gaps. The number 32 has binary representation 100000 and has no binary gaps.

Write a function:

function solution(N);
that, given a positive integer N, returns the length of its longest binary gap. The function should return 0 if N doesn't contain a binary gap.

For example, given N = 1041 the function should return 5, because N has binary representation 10000010001 and so its longest binary gap is of length 5. Given N = 32 the function should return 0, because N has binary representation '100000' and thus no binary gaps.

Write an efficient algorithm for the following assumptions:

N is an integer within the range [1..2,147,483,647].
**/

function solution(N) {
    // Convert integer to Binary string
    let binaryString = Number(N).toString(2);

    // Get an array of indices of all occurrence of "1"
    let indicesOfOnes = [...binaryString]
        .map((char, index) => char === "1" ? index : -1)
        .filter(index => index !== -1);

    // Loop through the indices and save the difference in an array
    let binaryGaps = [];
    if (indicesOfOnes.length > 1) {
        for (let i = 1; i < indicesOfOnes.length; i++) {
            binaryGaps.push(indicesOfOnes[i] - indicesOfOnes[i - 1] - 1);
        }
    }

    return binaryGaps.length ? Math.max(...binaryGaps) : 0;
}

function shorterSolution(N) {
    let binaryString = Number(N).toString(2);

    // We first split the string
    // Then we ignore the first and last element of the array for cases where the array element is ""
    // This will also not include string that ends with 0s like "000" since it is not enclosed with 1
    // After that we apply a reduce function to get the max value
    return binaryString
        .split("1")
        .slice(1, -1)
        .reduce((max, current) => Math.max(max, current.length), 0)
}

// console.log(solution(0));
// console.log(solution(9));
// console.log(solution(15));
// console.log(solution(32));
// console.log(solution(1041));

console.log(shorterSolution(0));
console.log(shorterSolution(1));
console.log(shorterSolution(2));
// console.log(shorterSolution(9));
// console.log(shorterSolution(15));
console.log(shorterSolution(32));
// console.log(shorterSolution(36));
// console.log(shorterSolution(328));
// console.log(shorterSolution(657));
// console.log(shorterSolution(1041));