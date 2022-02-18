const express = require('express');
const Project = require('./project-model');

const router = express.Router();

router.get('/', (req, res, next) => {
   Project.find()
   .then(projects => {
       res.json(projects)
   })
   .catch(next)
})

router.post('/', (req, res, next) => {
   Project.add(req.body)
   .then(project => {
     res.status(201).json(project)
   })
   .catch(next)
})

  module.exports = router;
