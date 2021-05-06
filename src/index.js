const path = require('path');
const express = require('express');
const exphbs = require('express-handlebars');
const morgan = require('morgan');

const app = express();
const port = 3000;

// morgan show trạng thái của request HTTP
app.use(morgan('combined'));
app.use(express.static(path.join(__dirname, 'public'))) ;

// Template Engine 
app.engine('hbs', exphbs({
  extname: '.hbs'
}));
app.set('view engine', 'hbs');
app.set('views',path.join(__dirname,'resources/views'));

app.get('/', (req, res) => {
  res.render('home');
})
app.get('/news', (req, res) => {
  res.render('news');
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})