const express = require('express');
const { createUser, authUser } = require('../service/user.service');

const route = express.Router();

route.post('/reg', async (request, response) => {
    try {
        const { name, surname, email, pwd } = request.body;
        const data = await createUser(name, surname, email, pwd);
        response.status(200).send(data);
    } catch (error) {
        response.status(404).send(error.message);
    }
})

route.post("/auth", async (request, response) => {
    try {
      const { email, pwd } = request.body;
      const data = await authUser(email, pwd);
      response.status(200).send(data);
    } catch (error) {
      response.status(404).send(error.message);
    }
  });
  

module.exports = route;