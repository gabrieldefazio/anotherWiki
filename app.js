const app = require('express')();
const morgan = require('morgan');
const bodyParser = require('body-parser');
const nunjucks = require('nunjucks');
const markdown = require('markdown');

app.engine('html', nunjucks.render);
app.set('view engine', 'html');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(morgan('dev'));

app.get('/', (req, res, next) =>{
  res.send("hello, you're here.")
})

module.exports= app