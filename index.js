const express = require('express')
const app = express()
const path = require('path')

const port = 3000

app.get('/', (req, res) => res.sendFile(path.join(__dirname + '/templates/mymap.html')));
app.use('/css', express.static(__dirname + '/css/'));
app.use('/js', express.static(__dirname + '/js/'));

app.listen(port, () => console.log('Example app listening on port '+port+'!'))
