const pool = require('../db');

// Get Patients
const getPatients = async (req, res) => {

    const {rows} = await pool.query('SELECT * FROM patient');
    res.json({
        ok: true,
        total: rows.length,
        patients:rows
    });
}

// Get patient
const getPatient = async (req, res) => {
    const id_patient = req.params.id;

    const {rows} = await pool.query('SELECT * FROM patient WHERE id_patient = $1',[id_patient]);

    res.json({
        ok: true,
        patient: rows
    });
}

// Delete Patient
const deletePatient = async (req, res) => {
    const id_patient = req.params.id;

    await pool.query('DELETE FROM patient WHERE id_patient = $1', [id_patient]);

    res.json({
        ok: true
    });
}

module.exports = {
    getPatients,
    getPatient,
    deletePatient
}
