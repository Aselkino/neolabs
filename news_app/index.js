const express = require('express');
const mongoose = require('mongoose')
// const cors = require('cors')

const app = express();
const bodyParser = require('body-parser');

const { router } = require('./routes/api')

// app.use(cors());
app.use(bodyParser.json());
app.use(router);


const PORT = 7979; // 3000-8666

const db_url = 'mongodb+srv://aselkin:793404.aselya@cluster0.sjwtq.mongodb.net/myFirstDatabase?retryWrites=true&w=majority'
 

async function start() {
    try {

        await mongoose.connect(db_url, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            useFindAndModify: false,
            useCreateIndex: true
          })
            .then(() => console.log('Подключился к БД'))
        
        app.listen(PORT, () => {
            console.log(`Приложение запущено на ${PORT} порту`);
        });
    } catch (e) {
        console.log('Ошибка при запуске: ', e.message);
        process.exit(1);
    }
}

start();


