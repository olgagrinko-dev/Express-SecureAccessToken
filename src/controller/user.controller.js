const express = require('express');
const { createUser, authUser } = require('../service/user.service');
const { isValidUserBody } = require('../helper/validation');
const { buildResponse } = require('../helper/buildResponse');
const { createToken } = require('../helper/jwt');

const route = express.Router();

route.post('/reg', isValidUserBody, async (request, response) => {
  try {
    const { name, surname, email, pwd } = request.body;
    const data = await createUser(name, surname, email, pwd);
    buildResponse(response, 200, data);
  } catch (error) {
    buildResponse(response, 404, error.message);
  }
});

route.post('/auth', async (request, response) => {
  try {
    const { email, pwd } = request.body;
    const data = await authUser(email, pwd);

    const token = createToken(data);

    response.setHeader('authorization', [token]);

    buildResponse(response, 200, data);
  } catch (error) {
    buildResponse(response, 404, error.message);
  }
});

module.exports = route;
