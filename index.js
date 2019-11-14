const express = require('express')
const path = require('path')
const app = express()

const port = process.env.PORT || 3000
app.use(express.static("public"));

app.get('/', function(req, res) {
  res.sendFile(path.join(__dirname + '/public/SignIn/signin.html'))
})

app.get('*', function(req, res) {
  res.send({
    error: 'Ruta no valida, la unicas rutas validas son /students y /met'
  })
})

app.listen(port, function() { 
  console.log('Up and running!')
})