import * as express from 'express';
import * as exphbs from 'express-handlebars';
const config = require('../config.json');
const app = express();

app.engine('hbs', exphbs({ extname: 'hbs' }));
app.set('view engine', 'hbs');

app.get('/', (req, res) => {
    return res.render('index', { title: 'NodeDex' });
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
