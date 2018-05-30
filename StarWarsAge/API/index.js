var express = require('express');
var request = require('request');
var parser = require('body-parser');
var app = express();

var baseURL = 'https://swapi.co/api';

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

app.get('/', function(req, res){
    res.send('PLANETOIDE')
})

app.use(parser.json());

app.get('/planetas', (req,res) =>{
    request(`${baseURL}/planets`, (err,response,body) =>{
        res.send(body)
    })
})

app.get('/edad-planetas/:edad/:planeta', (req,res) => {
        if(!req.params.edad){
            res.sendStatus(500)
            res.json({status: "no existe, viejo"})
        }else{
            request(`${baseURL}/planets/${req.params.planeta}`, (err,response,body) =>{
                let b = JSON.parse(body);
                console.log(b.gravity);
                console.log(req.params);
                var dias = req.params.edad * 365;
                var diasMarcianos = dias/b.orbital_period;

                if(err){
                    res.send(err)
                }else{
                    res.json({
                        planeta: b.name,
                        edad: diasMarcianos,
                        año: Number(b.orbital_period),
                        dia: Number(b.rotation_period)
                    })
                }
            })
        }
})

app.listen(3030, function(){
    console.log('Listening in 3030');
})