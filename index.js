let express = require('express');
let app = express();
const port = process.env.PORT || 3000;

app.set("view engine", "ejs");
app.use('/public', express.static('public'));
app.use(
  express.urlencoded({
    extended: false
  })
);

app.get('/',function(req,res){
    res.render('home');
});

app.get('/aboutme',function(req,res){
    res.render('aboutme')
});

app.get('/contact',function(req,res){
    res.render('contact')
});

app.get('/portfolio',function(req,res){
    res.render('portfolio')
});

app.listen(port,() => {
    console.log("App listening on port: "+port);
})