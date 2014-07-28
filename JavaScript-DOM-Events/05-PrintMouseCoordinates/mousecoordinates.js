(function() {
    window.onmousemove = handleMouseMove;
    function handleMouseMove(event) {
        event = event || window.event;
        
        var result = 'X:' + event.clientX + '; Y:' + event.clientY + ' Time: '+new Date();

        console.log(result);
    }
})();