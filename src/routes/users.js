const express = require('express');
const { getUsers, createUser, getUserById, putUserById, deleteUserById } = require('../controllers/usersController');
const autorization = require('../middlewares/auth');
const validation = require('../middlewares/validation');

const router = express.Router();

router.get('/', autorization, getUsers);
router.post('/', validation, createUser);
router.get('/:userId', autorization, getUserById);
router.put('/:userId', autorization, putUserById);
router.delete('/:userId', autorization, deleteUserById);

module.exports = router;
