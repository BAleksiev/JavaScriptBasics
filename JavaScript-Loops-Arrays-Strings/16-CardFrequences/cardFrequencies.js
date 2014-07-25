function findCardFrequency(str) {
    
    var cards = str.split(' ');
    var result = new Array();
    
    
    for (var i = 0; i < cards.length; i++) {
        
        cards[i] = cards[i].replace('?', '');
        
        if(result[cards[i]]) {
            result[cards[i].toString()]++;
        } else {
            result[cards[i].toString()] = 1;
        }
    }
    
    for(var card in result) {
        
        var appearance = ((result[card] / cards.length) * 100).toFixed(2);
        console.log(card + ' -> ' + appearance + '%');
    }
    
}

findCardFrequency('8? 2? 4? 10? J? A? K? 10? K? K?');
findCardFrequency('J? 2? 2? 2? 2? 2? 2? J? 2?');
findCardFrequency('10? 10?');