const express = require('express');
const Task = require('./Task-model');

const router = express.Router();

router.get('/', (req, res, next) => {
   Task.find()
   .then(tasks => {
       res.json(tasks)
   })
   .catch(next)
})

router.post('/', (req, res, next) => {
   Task.add(req.body)
   .then(task => {
     res.status(201).json(task)
   })
   .catch(next)
})

  module.exports = router;
