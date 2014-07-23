function divisionBy3(value) {
    
    var digits = value.toString().split('');
    var sum = 0;
    
    for (var i = 0; i < digits.length; i++) {
        sum += parseInt(digits[i]);
    }
    
    if(sum % 3 === 0) {
        console.log('the number is divided by 3 without remainder');
    } else {
        console.log('the number is not divided by 3 without remainder');
    }
    
}

divisionBy3(12);
divisionBy3(91);
divisionBy3(189);
divisionBy3(591);