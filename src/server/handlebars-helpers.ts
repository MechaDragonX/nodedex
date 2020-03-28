module.exports = {
    add: function(one, two): number {
        one = parseFloat(one);
        two = parseFloat(two);
        return one + two;
    },
    subtract: function(one, two): number {
        one = parseFloat(one);
        two = parseFloat(two);
        return one - two;
    },
    multiply: function(one, two): number {
        one = parseFloat(one);
        two = parseFloat(two);
        return one * two;
    },
    divide: function(one, two): number {
        one = parseFloat(one);
        two = parseFloat(two);
        return one / two;
    },
    modulo: function(one, two): number {
        one = parseFloat(one);
        two = parseFloat(two);
        return one % two;
    },
    format: function(input): string {
        let result: string[] = input.toLowerCase().split('-');;
        for(let i: number = 0; i < result.length; i++) {
            result[i] = result[i].charAt(0).toUpperCase() + result[i].slice(1); 
        }
        return result.join(' ');
    },
    ifEqual: function(arg1, arg2, options): boolean {
        return (arg1 === arg2) ? options.fn(this) : options.inverse(this);
    },
    ifNotEqual: function(arg1, arg2, options): boolean {
        return (arg1 != arg2) ? options.fn(this) : options.inverse(this);
    },
    ifLessThan: function(arg1, arg2, options): boolean {
        return (arg1 < arg2) ? options.fn(this) : options.inverse(this);
    },
    ifGreaterThan: function(arg1, arg2, options): boolean {
        return (arg1 > arg2) ? options.fn(this) : options.inverse(this);
    },
    pokemonLink: function(id: number): string {
        return `/national/${id}`
    },
    imageLink: function(id: number): string {
        return `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`
    },
    toFeetInches: function(value): string {
        let feet: number = value * 0.3281;
        let foot: number = parseInt(feet.toString());
        let inch: number = Math.round((feet - foot) * 12);

        return `${foot}\'${inch}\"`;
    },
    toPounds: function(value): string {
        return (value * 0.2205).toFixed(1);
    }
}