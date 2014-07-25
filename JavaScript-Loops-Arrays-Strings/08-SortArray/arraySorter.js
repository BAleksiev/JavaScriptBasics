function sortArray(arr) {
    
    var tmp, tmp2;
    
    for (var i = 0; i < arr.length - 1; i++) {
        
        tmp = i;
        
        for (var j = i + 1; j < arr.length; j++) {
            if (arr[j] < arr[tmp]) {
                tmp = j;
            }
        }

        tmp2 = arr[tmp];
        arr[tmp] = arr[i];
        arr[i] = tmp2;
    }
    
    console.log(arr);
}

sortArray([5, 4, 3, 2, 1]);
sortArray([12, 12, 50, 2, 6, 22, 51, 712, 6, 3, 3]);