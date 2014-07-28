$(document).ready(function() {
    
    $('button').click(function() {
        
        var state = $(this).html();
        
        if(state === 'Like') {
            $(this).html('Unlike');
        } else if(state === 'Unlike') {
            $(this).html('Like');
        }
        
    });
    
});