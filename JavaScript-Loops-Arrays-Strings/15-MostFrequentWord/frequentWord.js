function findMostFreqWord(str) {

    var arr = str.split(/\W+/);
    var result = new Array();

    for (var i = 0; i < arr.length; i++) {

        var word = arr[i].toLowerCase();

        if (word !== '') {
            if (result[word]) {
                result[word]++;
            } else {
                result[word] = 1;
            }
        }
    }

    var max = Math.max.apply(null, Object.keys(result).map(function(e) {
        return result[e];
    }));
    
    for(var word in result) {
        if(result[word] === max) {
            console.log(word + ' -> ' + max + ' times');
        }
    }

}


findMostFreqWord('in the middle of the night');
findMostFreqWord('Welcome to SoftUni. Welcome to Java. Welcome everyone.');
findMostFreqWord('Hello my friend, hello my darling. Come on, come here. Welcome, welcome darling.');