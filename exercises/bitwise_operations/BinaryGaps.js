function solution(N) {
    let binaryString = (N >>> 0).toString(2);
    let matchedPositionOfOnes = []
    let position = 0

    // Get all matching 1s from the binary string
    while(position < binaryString.length) {
        position = binaryString.indexOf("1", position);
        if(position === -1) break;
        matchedPositionOfOnes.push(position);
        position++;
    }

    // If the array length is 1 or empty, we return 0
    if(matchedPositionOfOnes.length <= 1) return 0;

    // Loop through the matched position array and get the difference between each sequential elements
    let differenceArray = []
    for(let i = 0; i < matchedPositionOfOnes.length - 1; i++) {
        let difference = parseInt(matchedPositionOfOnes[i + 1]) - parseInt(matchedPositionOfOnes[i]) - 1;

        differenceArray.push(difference);
    }

    return Math.max(...differenceArray);
}

console.log("answer: ", solution(32));