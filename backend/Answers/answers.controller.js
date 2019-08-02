const express = require('express');
const router = express.Router();
const answerService = require('./answer.service');

// routes
router.get('/', getAll);
router.get('/:id/', getById);
router.post('/', create);
router.put('/:id', update);
router.delete('/:id', remove);

module.exports = router;

async function getAll(req, res, next) {
  try {
    const qs = await answerService.getAll();
    qs ? res.json({answers: qs, count: qs.length}) : res.status(400).json({message: 'Error leyendo la base de datos'});
  } catch (error) {
    next(error);
  }
}

async function getById(req, res, next) {
  try {
    const { id } = req.params;
    const qs = await answerService.getById(id);
    qs ? res.json(qs) : res.status(400).json({message: 'Error leyendo la base de datos'});
  } catch (error) {
    next(error);
  }
}

async function create(req, res, next) {
  try {
    const { answer } = req.body;
    const qs = await answerService.create({ answer });
    qs ? res.json({ answer }) : res.status(400).json({message: 'Error leyendo la base de datos'});
  } catch (error) {
    next(error);
  }
}

async function update(req, res, next){
  try {
    const { id } = req.params;
    const { answer } = req.body;
    const qs = await answerService.update(id, { answer });
    qs ? res.json({ answer }) : res.status(400).json({message: 'Error leyendo la base de datos'});
  } catch (error) {
    next(error);
  }
}

async function remove(req, res, next){
  try {
    const { id } = req.params;
    const qs = await answerService.remove(id);
    qs ? res.json(qs) : res.status(400).json({message: 'Error leyendo la base de datos'});
  } catch (error) {
    next(error);
  }
}