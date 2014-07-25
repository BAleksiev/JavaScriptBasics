function findMostFreqNum(arr) {

    var cnt = 1;
    var num = arr[0];
    var max_cnt = 1;

    Array.sort(arr);

    for (var i = 1; i < arr.length; i++) {

        if (arr[i] === arr[i - 1]) {
            cnt++;
        } else {
            cnt = 1;
        }

        if (cnt > max_cnt) {
            max_cnt = cnt;
            num = arr[i];
        }

    }

    console.log(num + ' (' + max_cnt + ' times)');

}

findMostFreqNum([4, 1, 1, 4, 2, 3, 4, 4, 1, 2, 4, 9, 3]);
findMostFreqNum([2, 1, 1, 5, 7, 1, 2, 5, 7, 3, 87, 2, 12, 634, 123, 51, 1]);
findMostFreqNum([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13]);