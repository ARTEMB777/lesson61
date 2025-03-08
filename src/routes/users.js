const express = require('express');
const { getUsers, createUser, getUserById, putUserById, deleteUserById } = require('../controllers/usersController');

const router = express.Router();

router.get('/', getUsers);
router.post('/', createUser);
router.get('/:userId', getUserById);
router.put('/:userId', putUserById);
router.delete('/:userId', deleteUserById);

module.exports = router;
