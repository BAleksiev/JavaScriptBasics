Array.prototype.removeItem = function(item) {

    while (this.indexOf(item) >= 0) {
        this.splice(this.indexOf(item), 1);
    }
    
    console.log(this);
    return this;
};

var arr = [1, 2, 1, 4, 1, 3, 4, 1, 111, 3, 2, 1, '1'];
arr.removeItem(1);

var arr = ['hi', 'bye', 'hello' ];
arr.removeItem('bye');