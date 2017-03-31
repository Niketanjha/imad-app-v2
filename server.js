var express = require('express');
var morgan = require('morgan');
var path = require('path');
var crypto = require('crypto');
var button = document.getElementById('counter');
var app = express();
app.use(morgan('combined'));

//This is for adding button
button.oneclick=function(){
    counter=counter+1;
    var span=document.getElementById('count');
    span.innerHTML=counter.toString();
};

var request = newXMLHttpRequest();
request.onereadystatechange=function(){
    if(request.readyState___XMLHttpRequest.DONE){
        if(request.status===200){
            request.responseText
        }
    }
}; 




app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'index.html'));
});

app.get('/article-one', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'article-one.html'));
});


app.get('/article-two',function(req,res){
    res.send('Article two requested and will be served here');
}); 

app.get('/article-three',function(req,res){
    res.send('Article three requested and will be served here');
}); 

function hash (input,salt){
	var hashed= crypto.pbkdf2Sync(input,salt,10000,512,'sha512');
    return hashed.toString('hex');
 }

app.get('/hash/:input',function(req,res){
	var hashedString= hash(req.params.input,'this-is-some-random-string');
	res.send(hashedString);
});

app.get('/ui/cover.jpg', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'cover.jpg'));
});



app.get('/ui/style.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'style.css'));
});

app.get('/ui/madi.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'madi.png'));
});


var port = 8080; // Use 8080 for local development because you might already have apache running on 80
app.listen(8080, function () {
  console.log(`IMAD course app listening on port ${port}!`);
});
