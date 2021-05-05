const { News } = require('../models/news')

exports.getNews = async (req, res) => {
    try {
        const allNews = await News.find()

        console.log(filteredNews);


        res.status(202).json(filteredNews) //respons ispolnilsya uspeshno otpravlyaem otvet 200
    } catch (e) {
        res.status(500).json({
            message: e.message
        })
    }
}

exports.getOneNews = async (req, res) => {
    try {
        const news = await News.findById(req.params.newsId);

        if (!news) {
            return res.status(404).json('Новость не найдено')
        }

        return res.status(200).json(news);
        
    } catch (e) {
        console.log(e.message);
        res.status(500).json('Сервер упал');
    }
}

exports.createNews = async (req, res) => {
    try {
        const news = req.body;
        const createNews = await News.create(news);

        res.status(201).json({
            message: 'Новость создана',
            news: createNews
        });
    } catch (e) {
        res.status(500).json({
            message: e.message
        })
        
    }
}

exports.deleteNews = async (req, res) => {
    try {
        const news = await News.findByIdAndRemove(req.params.newsId);
        res.status(201).json(news)
     } catch (e) {
        console.log(e.message)
    }
}
exports.updateNews = async (req, res) => {
    try {
        const newsId = req.params.newsId;

        const fieldsToUpdate = req.body;
        /**
         * {
         * title: 'Новый тайтл',
         * content: 'Новый контент'
         * }
         */

        const updateNews = await News.findByIdAndUpdate(newsId, fieldsToUpdate);

        res.status(201),json({
            message: 'Новость обнавлена',
            news: updatedNews
        })
    } catch (e) {
        
    }
}