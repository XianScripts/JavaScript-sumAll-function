const sumAll = function(intA, intB) {
    let intC;
    error = 'ERROR';
    if (intA < 0 || intB < 0) {
        return error;
    }
    else if (intA !== Number(intA) || intB !== Number(intB)) {
        return error;
    }
    else if (intB < intA) {
        for (let i = intB; i <= intA; i++) {
            intC = i * (i+1)/2

        
        }
        return intC;
    }
    else {
        for (let i = intA; i <= intB; i++) {
            intC = i * (i+1)/2

        
        }
        return intC;
    }
};
console.log(sumAll(1, 4));

 // N * (N+1)/2 Formula for solving sum of integers
// Do not edit below this line
module.exports = sumAll;

// For larger numbers, write if statment to run a seperate block of code for intA being larger,
// Else run the normal block of code.