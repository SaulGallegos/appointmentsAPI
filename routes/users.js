const {Router} = require('express');

// Controllers
const {
    createUser,
    getUser,
    editUser,
    deleteUser,
    getUsers
} = require('../controllers/users');

const router = Router();

// Crear Users
router.post('/', createUser);

// Get Users
router.get('/all', getUsers);

// Get Users
router.get('/:id', getUser);

// Editar Users
router.put('/:id', editUser);

// Eliminar Users
router.delete('/:id', deleteUser);

module.exports = router;