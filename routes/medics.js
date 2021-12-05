const {Router} = require('express');

// Controllers
const {
    createMedic,
    getMedic,
    editMedic,
    deleteMedic,
    getMedics
} = require('../controllers/medics');

const router = Router();

// Crear Medics
router.post('/', createMedic);

// Get Medics
router.get('/all', getMedics);

// Get Medic
router.get('/:id', getMedic);

// Editar Medic
router.put('/:id', editMedic);

// Eliminar Medic
router.delete('/:id', deleteMedic);

module.exports = router;