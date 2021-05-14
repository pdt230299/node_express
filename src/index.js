const path = require('path');
const express = require('express');
const exphbs = require('express-handlebars');
const morgan = require('morgan');
const route = require('./routes');
const db = require('./config/db');
const methodOverride = require('method-override');

const app = express();//https://stackoverflow.com/questions/23509162/expressjs-javascript-fundamentals-exports-module-exports-createapplication
const port = 3000;


db.connect(); // export ra object thì khi viết sẽ rõ nghĩa hơn---Connect database

// ----------------------------app.use------------------------------------------------------------------------------------

app.use(morgan('combined'));// morgan show trạng thái của request HTTP
app.use(express.static(path.join(__dirname, 'public'))) ;

app.use(express.urlencoded({
  extended : true
}));//middleware xử lí dữ liệu phương thức post

app.use(express.json());//XMLhttpRequest,fetch,axios thì sử dụng .json()

app.use(methodOverride('_method'));// method-override
// ----------------------------app.use----------------------------------------------------------------------------------------------------------------------

// ----------------------------app.engine------------------------------------------------------------------------------------
app.engine('hbs', exphbs({
    extname: '.hbs', // Sử dụng express-handbar được base trên handbarjs // set view engine có file là đuôi .hbs
    helpers: {
       sum:(a,b)=>a+b,
    }
}));
// ----------------------------app.engine------------------------------------------------------------------------------------

// ----------------------------app.set------------------------------------------------------------------------------------

app.set('view engine', 'hbs');

//Set đường dẫn cho file view vì n khác mặc định
app.set('views',path.join(__dirname,'resources','views'));//resources/views
// ----------------------------app.set------------------------------------------------------------------------------------


//Route
route(app);

//Listen port
app.listen(port, () => {
  console.log(`App listening at http://localhost:${port}`)
})