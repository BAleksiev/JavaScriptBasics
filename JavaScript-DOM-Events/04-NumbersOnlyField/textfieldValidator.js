$(document).ready(function() {
    
    $('input').keyup(function(e) {
        
        var key = e.key;
        var value = $(this).val();
        
        if(!isNaN(parseInt(key)) === false && e.keyCode !== 8) {
            value = value.toString().slice(0, -1);
            $(this).val(value);
            $(this).css('background', 'red');
        } else {
            $(this).css('background', 'white');
        }
        
    });
});