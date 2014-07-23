
function calcCircleArea(r) {
    return Math.PI * r * r;
}

document.body.innerHTML = 'r = 7; area = ' + calcCircleArea(7) + '<br/>';
document.body.innerHTML += 'r = 1.5; area = ' + calcCircleArea(1.5) + '<br/>';
document.body.innerHTML += 'r = 20; area = ' + calcCircleArea(20) + '<br/>';