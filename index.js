const express = require('express')
const app = express()
const path = require('path')

const port = 3000

app.get('/', (req, res) => res.sendFile(path.join(__dirname + '/templates/mymap.html')));
app.use('/css', express.static('./css/'));
app.use('/js', express.static('./js/'));

app.listen(port, () => console.log('Example app listening on port '+port+'!'))
