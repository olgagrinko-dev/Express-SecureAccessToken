const { pool } = require('../db');

async function getUserByEmail(email) {
    const client = await pool.connect();
    const sql = "select * from users where email = $1";
    const result = (await client.query(sql, [email])).rows;
    return result;
}

async function createUserDb(name, surname, email, pwd) {
    const client = await pool.connect();
    const sql = 'INSERT into users (name, surname, email, pwd) values ($1, $2, $3, $4) returning *';
    const result = (await client.query(sql, [name, surname, email, pwd])).rows;
    return result;
}

module.exports = { getUserByEmail, createUserDb };