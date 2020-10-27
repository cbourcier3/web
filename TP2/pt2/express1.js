const express = require('express')
const app = express()
const port = 8080
const url = require('url');

app.get('/', (req, res) => {
  const param = url.parse(req.url, true).query;
  console.log(param);
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.send('Hello World!')
})

app.use('/add/:nb1/:nb2',(req, res) => {
  console.log('add, nb1 ' + req.params.nb1 + ' nb2 '+ req.params.nb2);
  nb1 = parseInt(req.params.nb1);
  nb2 = parseInt(req.params.nb2);
  resultat = nb1+nb2;
  res.send(nb1 + '+' + nb2 + '=' + resultat);
});

app.use('/add/:nb1',(req, res) => {
  console.log('add, nb1 ' + req.params.nb1);
  nb1 = parseInt(req.params.nb1);
  resultat = nb1+nb1;
  res.send(nb1 + '+' + nb1 + '=' + resultat);
});

app.use('/add',(req, res) => {
  res.send("No parameter sent");
});

app.listen(port, () => {
  console.log(`Server listening at http://localhost:${port}`)
})

