function findMaxSequence(arr) {

    var seq = 1;
    var max_seq = 1;
    var pos = -1;
    var max_pos = -1;
    
    for (var i = 1; i < arr.length; i++) {

        if (arr[i] > arr[i - 1]) {
            if (seq === 1) {
                pos = i - 1;
            }

            seq++;
        } else {
            seq = 1;
        }

        if (seq > max_seq) {
            max_seq = seq;
            max_pos = pos;
        }
    }
    
    if (max_seq > 1) {
        console.log(arr.slice(max_pos, max_pos + max_seq));
    } else {
        console.log('no');
    }
}

findMaxSequence([3, 2, 3, 4, 2, 2, 4]);
findMaxSequence([3, 5, 4, 6, 1, 2, 3, 6, 10, 32]);
findMaxSequence([3, 2, 1]);