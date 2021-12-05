const {Router} = require('express');

// Controllers
const {
    createAppointment,
    getAppointments,
    getAppointment,
    deleteAppointment
} = require('../controllers/appointments');

const router = Router();

// Crear Pacientes
router.post('/', createAppointment);

// Get Paciente
router.get('/all', getAppointments);

// Get Paciente
router.get('/:id', getAppointment);

// Eliminar Paciente
router.delete('/:id', deleteAppointment);

module.exports = router;