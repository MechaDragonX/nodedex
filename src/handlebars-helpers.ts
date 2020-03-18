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
    format: function(input) {
        let result: string[] = input.toLowerCase().split('-');;
        for(let i: number = 0; i < result.length; i++) {
            result[i] = result[i].charAt(0).toUpperCase() + result[i].slice(1); 
        }
        return result.join(' ');
    },
    ifEquals: function(arg1, arg2, options) {
        return (arg1 == arg2) ? options.fn(this) : options.inverse(this);
    },
    toFeetInches: function(value) {
        let feet: number = value * 0.3281;
        let foot: number = parseInt(feet.toString());
        let inch: number = Math.round((feet - foot) * 12);

        return foot + '\'' + inch + '\"';
    },
    toPounds: function(value) {
        (value * 0.2205).toFixed(1);
    }
}