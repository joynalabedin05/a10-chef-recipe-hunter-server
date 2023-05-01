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
});

app.get('/recipe/:id',(req, res)=>{
    const id = req.params.id;
    // console.log(id);
    const selectedRecipe = recipe.find(n=>n.id==id);
    res.send(selectedRecipe);
})

app.listen(port, ()=>{
    console.log(`dragon is running on ${port}`);
});