$(document).ready(function() {
    
    $('button').click(function() {
        
        var n = 1;
        
        do {
            var row = $('tr:nth-child('+n+')');
            n += 2;
            
            row.hide();
        } while(row.html() !== undefined);
        
    });
});