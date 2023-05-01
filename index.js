const express = require('express');
const app = express();
const cors = require('cors');
app.use(cors());
const port = process.env.PORT || 5000;

const recipe = require('./recipe.json');

app.get('/', (req, res)=>{
    res.send('Dragon is running')
});

app.get('/recipe',(req, res)=>{
    res.send(recipe);
})

app.listen(port, ()=>{
    console.log(`dragon is running on ${port}`);
});