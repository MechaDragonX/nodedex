import * as express from 'express';
import * as exphbs from 'express-handlebars';
import * as Pokedex from 'pokedex-promise-v2';
const config = require('../config.json');
const app = express();
const dex = new Pokedex();

app.engine('.hbs', exphbs({
    extname: '.hbs',
    helpers: require('../src/handlebars-helpers')
}));
app.set('view engine', 'hbs');

app.get('/', (req, res) => {
    return res.render('index', { title: 'NodeDex' });
});
app.get('/national/:pokemon', async (req, res) => {
    let general, species;
    let title: string;

    try {
        general = await dex.getPokemonByName(req.params.pokemon);
    } catch(e) {
        console.log('ERROR: ', e);
    }
    try {
        species = await dex.getPokemonSpeciesByName(req.params.pokemon);
    } catch(e) {
        console.log('ERROR: ', e);
    }

    console.log(general.height);
    title = 'No. ' + general.id + ': ' + general.name;
    return res.render('pokemon', { title: title, general: general, species: species });
});
app.get('*', (req, res) => {
    return res.render('404', {
        layout: 'error.hbs',
        title: '404: Resource not Found'
    });
});
app.listen(config.port, () => {
    console.log(`Running on ${ process.env.NODE_ENV === 'production' ? 'production' : 'debug' }, listening on port ${ config.port }`);
});
