const path = require('path');
const express = require('express');
const exphbs = require('express-handlebars');
const morgan = require('morgan');
const route = require('./routes');

const app = express();
const port = 3000;

// morgan show trạng thái của request HTTP
app.use(morgan('combined'));
app.use(express.static(path.join(__dirname, 'public'))) ;
//middleware xử lí dữ liệu phương thức post
app.use(express.urlencoded({
  extended : true
}));
//XMLhttpRequest,fetch,axios thì sử dụng .json()
app.use(express.json())

// Template Engine 
app.engine('hbs', exphbs({
  extname: '.hbs'
}));
app.set('view engine', 'hbs');
//Set đường dẫn cho file view vì n khác mặc định
app.set('views',path.join(__dirname,'resources/views'));

route(app);

//Listen port
app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})