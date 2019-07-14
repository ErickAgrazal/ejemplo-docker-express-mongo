const express = require('express');
const router = express.Router();
const questionService = require('./questions.service');

// routes
router.get('/', getAll);
router.get('/:id/', getById);
router.post('/', create);
router.put('/:id', update);
router.delete('/:id', remove);

module.exports = router;

async function getAll(req, res, next) {
  try {
    const qs = await questionService.getAll();
    qs ? res.json({questions: qs, count: qs.length}) : res.status(400).json({message: 'Error leyendo la base de datos'});
  } catch (error) {
    next(error);
  }
}

async function getById(req, res, next) {
  try {
    const { id } = req.params;
    const qs = await questionService.getById(id);
    qs ? res.json(qs) : res.status(400).json({message: 'Error leyendo la base de datos'});
  } catch (error) {
    next(error);
  }
}

async function create(req, res, next) {
  try {
    const { name } = req.body;
    const qs = await questionService.create({ name });
    qs ? res.json({ name }) : res.status(400).json({message: 'Error leyendo la base de datos'});
  } catch (error) {
    next(error);
  }
}

async function update(req, res, next){
  try {
    const { id } = req.params;
    const { name } = req.body;
    const qs = await questionService.update(id, { name });
    qs ? res.json({ name }) : res.status(400).json({message: 'Error leyendo la base de datos'});
  } catch (error) {
    next(error);
  }
}

async function remove(req, res, next){
  try {
    const { id } = req.params;
    const qs = await questionService.remove(id);
    qs ? res.json(qs) : res.status(400).json({message: 'Error leyendo la base de datos'});
  } catch (error) {
    next(error);
  }
}