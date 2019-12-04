const express = require('express');
const path = require('path');
const app = express();
const bodyParser = require('body-parser');





app.set('view engine', 'ejs');
app.set('views', 'views');

app.use(express.static(__dirname + '/public')); //menaruh gambar,jss,css dll di public

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({
    extended:true
}))

require('./router/router')(app)


var port = 8000;
app.listen(port, function(){
    console.log('Server berjalan dengan port' + port);
});