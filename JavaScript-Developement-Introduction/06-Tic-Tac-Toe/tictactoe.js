move = 1;
boxes = new Array();

$(document).ready(function() {

    $('.box').click(function() {

        var sector = $(this).attr('id');
        var status = $(this).attr('class').split(' ');
        active = false;

        status.forEach(function(val) {
            if (val === 'active') {
                active = true;
            }
        });

        if (active === true) {
            if (move === 1) {
                $(this).addClass('x');
                boxes[sector] = 'x';
                move = 2;
            } else {
                $(this).addClass('o');
                boxes[sector] = 'o';
                move = 1;
            }

            $(this).removeClass('active');
            
            var win = false;
            
            if(boxes[1] === boxes[5] && boxes[1] === boxes[9] && boxes[1] !== undefined) {
                $('#1, #5, #9').addClass('winning');
                win = true;
            } else if(boxes[3] === boxes[5] && boxes[3] === boxes[7] && boxes[3] !== undefined) {
                $('#3, #5, #7').addClass('winning');
                win = true;
            } else if(boxes[1] === boxes[2] && boxes[1]  === boxes[3] && boxes[1] !== undefined) {
                $('#1, #2, #3').addClass('winning');
                win = true;
            } else if(boxes[4] === boxes[5] && boxes[4]  === boxes[6] && boxes[4] !== undefined) {
                $('#4, #5, #6').addClass('winning');
                win = true;
            } else if(boxes[7] === boxes[8] && boxes[7]  === boxes[9] && boxes[7] !== undefined) {
                $('#7, #8, #9').addClass('winning');
                win = true;
            } else if(boxes[1] === boxes[4] && boxes[1]  === boxes[7] && boxes[1] !== undefined) {
                $('#1, #4, #7').addClass('winning');
                win = true;
            } else if(boxes[2] === boxes[5] && boxes[2]  === boxes[8] && boxes[2] !== undefined) {
                $('#2, #5, #8').addClass('winning');
                win = true;
            } else if(boxes[3] === boxes[6] && boxes[3]  === boxes[9] && boxes[3] !== undefined) {
                $('#3, #6, #9').addClass('winning');
                win = true;
            }
            
            if(win === true) {
                $('.box').removeClass('active');
                $('.reload').show();
            }
        }

    });


    $('.reload').click(function() {
        location.reload();
    });
});