const express = require('express');
const { getArticles, createArticle, getArticlesById, putArticleById, deleteArticleById } = require('../controllers/articlesController');

const router = express.Router();

router.get('/', getArticles);
router.post('/', createArticle);
router.get('/:articleId', getArticlesById);
router.put('/:articleId', putArticleById);
router.delete('/:articleId', deleteArticleById);

module.exports = router;