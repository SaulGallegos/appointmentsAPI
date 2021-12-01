// id, name, last_name, email, password, active, admin, created
const sequelize = require('sequelize');

const User = sequelize.define('user',{
    id: {type: Sequelize.UUIDV4, unique: true, primaryKey: true},
    name: { type: Sequelize.STRING, allowNull: false},
    last_name: { type: Sequelize.STRING, allowNull: false},
    email: { type: Sequelize.STRING, allowNull: false},
    password: { type: Sequelize.STRING, allowNull: false},
    active: {type: Sequelize.BOOLEAN, defaultValue: true},
    admin: {type: Sequelize.BOOLEAN, defaultValue: true},
    created: {type: Sequelize.DATE, defaultValue: Sequelize.NOW},
});

module.exports = User;