const express= require('express');
const router = express.Router();

const { getNews, createNews, getOneNews,deleteNews} = require('../controllers/news');

router.get('/news', getNews);
router.get('/news/:newsId', getOneNews ); // params ID -> :newsId
router.post('/create-news', createNews);
// удаление одной новости
router.delete('/news/:newsId', deleteNews);
// обновление одной новости
// router.patch('/news/:newsId', updateNews);


exports.router = router;