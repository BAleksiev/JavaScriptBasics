function replaceSpaces(str) {
    
    var re = new RegExp(' ', 'g');
    var result = str.replace(re, '');
    
    console.log(result);
    
}

replaceSpaces('But you were living in another world tryin\' to get your message through');