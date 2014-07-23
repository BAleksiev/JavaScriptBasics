function findMaxSequence(sequence) {
    
    var max_eq = 1;
    var pos = 1;
    var seq = new Array();
    
    for (var i = 1; i < sequence.length; i++) {
        if(sequence[i] === sequence[i-1]) {
            max_eq++;
            pos = i;
        }
    }
    
}

console.log(findMaxSequence([2, 1, 1, 2, 3, 3, 2, 2, 2, 1]));
console.log(findMaxSequence(['happy']));
console.log(findMaxSequence([2, 'qwe', 'qwe', 3, 3, '3']));