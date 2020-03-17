module.exports = {
    add: function(one, two) {
        one = parseFloat(one);
        two = parseFloat(two);
        return one + two;
    },
    subtract: function(one, two) {
        one = parseFloat(one);
        two = parseFloat(two);
        return one - two;
    },
    multiply: function(one, two) {
        one = parseFloat(one);
        two = parseFloat(two);
        return one * two;
    },
    divide: function(one, two) {
        one = parseFloat(one);
        two = parseFloat(two);
        return one / two;
    },
    modulo: function(one, two) {
        one = parseFloat(one);
        two = parseFloat(two);
        return one % two;
    },
}