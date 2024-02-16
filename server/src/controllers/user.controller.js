const user = require('../services/user.service');

async function get(req, res, next) {
  try {
      res.json(await user.getMultiple(req.query.page));
  } catch (err) {
      console.error(`Error while getting user`, err.message);
      next(err);
  }
}

async function create(req, res, next) {
  try {
    res.json(await user.create(req.body));
  } catch (err) {
    console.error(`Error while creating user`, err.message);
    next(err);
  }
}

async function update(req, res, next) {
  try {
    res.json(await user.update(req.params.id, req.body));
  } catch (err) {
    console.error(`Error while updating user`, err.message);
    next(err);
  }
}

async function remove(req, res, next) {
  try {
    res.json(await user.remove(req.params.id));
  } catch (err) {
    console.error(`Error while deleting user`, err.message);
    next(err);
  }
}

module.exports = {
  get,
  create,
  update,
  remove
};