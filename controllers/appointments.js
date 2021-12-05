const pool = require('../db');

// Crear appointments
const createAppointment = async (req, res) => {
    const {title, notes, patient, medic, symptoms, disease, medicaments, user_admin, price} = req.body;
    const {rows} = await pool.query('SELECT * FROM appointment');
    const id_app = rows.length + 1, payment = id_app;
    const date = new Date();
    const active = true, paid = false;
    
    await pool.query(
        'INSERT INTO appointment (id_app, title, notes, patient, medic, symptoms, disease, medicaments, user_admin, price, date, active, paid, payment) \
        VALUES ($1,$2,$3,$4,$5,$6,$7,$8,$9,$10,$11,$12,$13, $14)',
        [
            id_app, title, notes, patient, medic, symptoms, disease, medicaments, user_admin, price, date, active, paid, payment
        ]
    );

    
    res.json({
        ok: true
    });
    
}

// Get appointment
const getAppointment = async (req, res) => {

    const id = req.params.id;

    const {rows} = await pool.query('SELECT * FROM appointment WHERE id_app = $1',[id]);

    res.json({
        ok: true,
        appointment: rows
    });
}

// Get appointments
const getAppointments = async (req, res) => {
    const {rows} = await pool.query('SELECT * FROM appointment');
    res.json({
        ok: true,
        total: rows.length,
        appointments:rows
    });
}

// Eliminar appointment
const deleteAppointment = async (req, res) => {
    const id_app = req.params.id;

    await pool.query('DELETE FROM appointment WHERE id_app = $1', [id_app]);

    res.json({
        ok: true
    });
}

module.exports = {
    createAppointment,
    getAppointments,
    getAppointment,
    deleteAppointment
}