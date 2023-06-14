const express = require('express');
const { createUser } = require('../service/user.service');

const route = express.Router();

route.post('/', async (request, response) => {
    try {
        const { name, surname, email, pwd } = request.body;
        const data = await createUser(name, surname, email, pwd);
        response.status(200).send(data);
    } catch (error) {
        response.status(404).send(error.message);
    }
})

module.exports = route;