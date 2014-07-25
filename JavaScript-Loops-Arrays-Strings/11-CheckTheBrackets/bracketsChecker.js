function checkBrackets(str) {
    
    var open = 0;
    var closed = 0;
    var current;
    var correct = true;
    
    for (var i = 0; i < str.length; i++) {
        
        current = str[i];
        
        if(current === '(') {
            open++;
        } else if(current === ')') {
            closed++;
            
            if(closed > open) {
                correct = false;
            }
        }
    }
            
    if(closed > open || open !== closed) {
        correct = false;
    }
    
    if(correct === true) {
        console.log('correct');
    } else {
        console.log('incorrect');
    }
}

checkBrackets('( ( a + b ) / 5 – d )');
checkBrackets(') ( a + b ) )');
checkBrackets('( b * ( c + d *2 / ( 2 + ( 12 – c / ( a + 3 ) ) ) )');