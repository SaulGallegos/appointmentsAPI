const {Router} = require('express');

// Controllers
const {
    getPatients,
    getPatient,
    deletePatient
} = require('../controllers/patients');

const router = Router();


// Get Pacientes
router.get('/all', getPatients);

// Get Pacientes
router.get('/:id', getPatient);

// Eliminar Paciente
router.delete('/:id', deletePatient);

module.exports = router;