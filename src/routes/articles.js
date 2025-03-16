const express = require('express');
const { getArticles, createArticle, getArticlesById, putArticleById, deleteArticleById } = require('../controllers/articlesController');
const autorization = require('../middlewares/auth');

const router = express.Router();

router.get('/',autorization, getArticles);
router.post('/', autorization, createArticle);
router.get('/:articleId', autorization, getArticlesById);
router.put('/:articleId', autorization, putArticleById);
router.delete('/:articleId', autorization, deleteArticleById);

module.exports = router;