import * as express from 'express';
import * as exphbs from 'express-handlebars';
import * as bodyParser from 'body-parser';
const config = require('../../config.json');
const { getPokemonDataReq, getPokemonSpeciesDataReq, getPokemonData, getPokemonSpeciesData } = require('./serverUtil');
const app = express();

app.engine('.hbs', exphbs({
    extname: '.hbs',
    helpers: require('./handlebars-helpers')
}));
app.set('view engine', 'hbs');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.urlencoded());
app.use('/client', express.static(__dirname.slice(0, -6) + 'compiled'));


app.get('/', (req, res) => {
    return res.render('index', { title: 'NodeDex' });
});
app.get('/national', async (req, res) => {
    let pokemonSpecies = new Array();
    let species;

    for(let i: number = 1; i <= 10; i++) {
        species = await getPokemonSpeciesData(i);
        pokemonSpecies.push(species);
    }

    return res.render('national', { title: 'National Pokédex', pokemon: pokemonSpecies });
});
app.post('/national', (req, res) => {
    return res.redirect('/national/' + req.body.pokemon.toLowerCase());
});
app.get('/national/:pokemon', async (req, res) => {
    let general = await getPokemonDataReq(req, res);
    let species = await getPokemonSpeciesDataReq(req);

    let title: string, name: string;
    name = general.name.charAt(0).toUpperCase() + general.name.substring(1);
    title = 'No. ' + general.id + ': ' + name;

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
