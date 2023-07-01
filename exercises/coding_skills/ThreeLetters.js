function solution(A, B) {
    let lengthOfString = A + B;
    let results = "";
    let a = "a";
    let b = "b"

    while(A > 0 || B > 0) {
        if(A > B) {
            results += a;
            A--;

            if(A > 0 && !(results.substring(-2) === "aa")) {
                results += a;
                A--
            }
        } else {
            results += b;
            B--;

            if(B > 0 && !(results.substring(-2) === "bb")) {
                results += b;
                B--;
            }
        }

        console.log("A", A, "B", B, results);
    }

    return results;
}

// solution(5, 3)
// console.log(solution(5, 3));
// console.log(solution(3, 3));
console.log(solution(1, 4));