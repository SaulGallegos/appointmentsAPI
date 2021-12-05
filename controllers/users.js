const pool = require('../db');


// Crear Usuarios
const createUser = async (req, res) => {
    const {name, last_name, email, password} = req.body

    const {rows} = await pool.query('SELECT * FROM users WHERE active = true');
    const id = rows.length + 1;
    
    const created = new Date();
    const active = true;
    
    await pool.query(
        'INSERT INTO users (id_user, username, last_name, email, userpassword, active, created) VALUES ($1,$2,$3,$4,$5,$6,$7)',
        [
            id, name, last_name, email, password, active, created 
        ]
        );

    res.json({
        ok: true
    })
}

// Get Usuario
const getUser = async (req, res) => {
    const id = req.params.id;

    const {rows} = await pool.query('SELECT * FROM users WHERE id_user = $1',[id]);

    res.json({
        ok: true,
        user: rows
    });
}

const getUsers = async (req, res) => {
    const {rows} = await pool.query('SELECT * FROM users WHERE active = true');
    res.json({
        ok: true,
        total: rows.length,
        users:rows
    });
}

// Editar Usuario
const editUser = async (req, res) => {
    const id_user = req.params.id;
    const {username, last_name } = req.body;

    await pool.query('UPDATE users SET username = $1, last_name = $2 WHERE id_user = $3',
    [username, last_name, id_user]);

    res.json({
        ok: true
    });
}

// Eliminar Usuario
const deleteUser = async (req, res) => {
    const id_user = req.params.id;

    await pool.query('UPDATE users SET active = $1 WHERE id_user = $2',
    [false, id_user]);

    res.json({
        ok: true
    });
}

module.exports = {
    createUser,
    getUser,
    editUser,
    deleteUser,
    getUsers
}