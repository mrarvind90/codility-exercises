
function solution(E, L) {
    let entranceFee = 2;
    let firstHourCharge = 3;
    let subsequentHoursCharge = 4;

    let [entryHour, entryMinute] = E.split(":");
    let entryTime = new Date(0, 0, 0, entryHour, entryMinute);

    let [leavingHour, leavingMinute] = L.split(":");
    let leavingTime = new Date(0, 0, 0, leavingHour, leavingMinute);

    let timeDifferenceInHours = (leavingTime - entryTime) / (60 * 60 * 1000);
    console.log(timeDifferenceInHours);

    let integerPart = Math.floor(timeDifferenceInHours);
    let decimalPart = timeDifferenceInHours - integerPart;

    let hourlyBreakdown = new Array(integerPart).fill(1);
    if (decimalPart !== 0) hourlyBreakdown.push(1);

    return entranceFee + (firstHourCharge * hourlyBreakdown[0]) + (subsequentHoursCharge * hourlyBreakdown.slice(1).length);
}

console.log(solution("09:42", "09:43"))