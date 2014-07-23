function printNumbers(n) {

    var result = '';

    if (n < 0) {
        result = 'no';
    } else {

        for (var i = 1; i <= n; i++) {

            if (i % 4 !== 0 && i % 5 !== 0) {

                if (i !== 1) {
                    result += ', ';
                }

                result += i;
            }
        }
    }

    return result;
}


console.log(printNumbers(20));
console.log(printNumbers(-5));
console.log(printNumbers(13));