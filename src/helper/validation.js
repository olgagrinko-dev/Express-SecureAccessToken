function isValidUserBody(request, response, next) {
  const { name, surname, email, pwd } = request.body;
  if (!name) throw new Error('name отсутствует');
  if (!surname) throw new Error('surname отсутствует');
  if (!email) throw new Error('email отсутствует');
  if (!pwd) throw new Error('pwd отсутствует');
  if (!isNaN(name)) throw new Error('некорректное значение');
  if (!isNaN(surname)) throw new Error('некорректное значение');
  next();
}

module.exports = { isValidUserBody };
