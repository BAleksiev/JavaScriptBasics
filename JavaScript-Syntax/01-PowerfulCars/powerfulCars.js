function convertKWtoHP(value) {
    var kw = 0.746;
    var result = value / kw;
    
    return result.toFixed(2);
}

console.log(convertKWtoHP(75));
console.log(convertKWtoHP(150));
console.log(convertKWtoHP(1000));