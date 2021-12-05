const pool = require('../db');

// Crear Medic
const createMedic = async (req, res) => {

    const {medic_name, last_name, gender, age, email, address, phone} = req.body;
    const {rows} = await pool.query('SELECT * FROM medic');
    const id_medic = rows.length + 1,no_medic = id_medic, image = id_medic;
    const created = new Date();

    await pool.query(
        'INSERT INTO medic (id_medic, no_medic, medic_name, last_name, gender, age, email, address, phone, created, image) \
        VALUES ($1,$2,$3,$4,$5,$6,$7,$8,$9,$10,$11)',
        [
            id_medic, no_medic, medic_name, last_name, gender, age, email, address, phone, created, image
        ]
    );

    res.json({
        ok: true
    });

}

// Get Medic
const getMedic = async (req, res) => {

    const id = req.params.id;

    const {rows} = await pool.query('SELECT * FROM medic WHERE id_medic = $1',[id]);

    res.json({
        ok: true,
        medic: rows
    });
}

// Get Medics
const getMedics = async (req, res) => {
    const {rows} = await pool.query('SELECT * FROM medic');
    res.json({
        ok: true,
        total: rows.length,
        medics:rows
    });
}

// Editar Medic
const editMedic = async (req, res) => {

    const id_medic = req.params.id;
    const {medic_name, last_name} = req.body;

    await pool.query('UPDATE medic SET medic_name = $1, last_name = $2 WHERE id_medic = $3',
    [medic_name, last_name, id_medic]);

    res.json({
        ok: true
    });
}

// Eliminar Medic
const deleteMedic = async (req, res) => {
    const id_medic = req.params.id;

    await pool.query('DELETE FROM medic WHERE id_medic = $1', [id_medic]);

    res.json({
        ok: true
    });
}

module.exports = {
    createMedic,
    getMedic,
    editMedic,
    deleteMedic,
    getMedics
}