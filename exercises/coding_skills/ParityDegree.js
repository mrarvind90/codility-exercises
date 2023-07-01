function solution(N) {
    let K = 0;

    while (N % (2 ** K) === 0) {
        K++;
        if(N % (2 ** K) !== 0) break;
    }

    return K - 1;
}

console.log(solution(24));