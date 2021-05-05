const express = require('express');

const app = express();

const PORT = 5000;

const news = [
    {
        title: 'В КР прошли выборы',
        content: 'dnmvdfvhfbyhr',
        date: new Date(),
    }
]


//endpoint /heroes
//GET -> [{ name: 'Captain America}]


app.get('/news', async (req, res) => {
    try {
        
        res.status(200).json({
            massage: 'Новости за последние 12 часов',
            news: ['новость 1', 'новость 2']
        })
    } catch (e) {
        
    }
});

const heroes = [
    {
        name: 'Captain America'
    }
]

app.get('/heroes', async(req, res) => {
    try {
        
        res.status(200).json({
            message:' Столица Америки: Вашингтон'
        })
    } catch (e) {
        
    }
});


app.listen(PORT, () => {
    console.log('Backend запушен!! на порту: ' + PORT);
});