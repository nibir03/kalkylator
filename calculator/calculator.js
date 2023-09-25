function add(x, y){
    return x + y;
};

function sub(x, y) {
    return x - y;
};

function multi(x, y) {
    return x * y;
};

div = function(x,y) { 
    if (y === 0) {
        return "kan inte dela med 0!"
    }
    return x / y ;
}


module.exports.add = add;
module.exports.sub = sub;
module.exports.multi = multi;
module.exports.div = div;
