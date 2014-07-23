function findMaxSequence(arr) {

    var seq = 1;
    var max_seq = 0;
    var pos = -1;
    var max_pos = -1;
    var result = '';

    for (var i = 1; i < arr.length; i++) {

        if (arr[i] > arr[i - 1]) {
            if (seq <= 1) {
                pos = i;
            }
            seq++;

        } else {
            if (seq > max_seq) {
                max_seq = seq;
                max_pos = pos;
            }
            seq = 0;
            pos = -1;
        }
    }
    if (max_seq > 1) {
        for (var i = max_pos; i < max_seq; i++) {
            result += arr[i] + ', ';
        }
    } else {
        result = 'no';
    }

    return result;
}

console.log(findMaxSequence([3, 2, 3, 4, 2, 2, 4]));
console.log(findMaxSequence([3, 5, 4, 6, 1, 2, 3, 6, 10, 32]));
console.log(findMaxSequence([3, 2, 1]));