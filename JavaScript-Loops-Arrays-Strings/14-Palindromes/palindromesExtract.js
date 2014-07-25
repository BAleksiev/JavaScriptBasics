function findPalindromes(str) {

    var words = str.toLowerCase().split(/\W+/);
    var word;
    var result = '';

    for (var i = 0; i < words.length; i++) {

        if (words[i] !== '') {
            word = words[i];

            var palindrome = true;

            for (var j = 0; j < Math.floor(word.length / 2); j++) {
                if (word[j] !== word[word.length - (j + 1)]) {
                    palindrome = false;
                }
            }

            if (palindrome === true) {
                result += word + ', ';
            }
        }

    }
    
    console.log(result.slice(0, -2));

}

findPalindromes('There is a man, his name was Bob.');