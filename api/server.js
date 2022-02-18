const express = require('express');
const projectRouter = require('./project/project-router');
const resourceRouter = require('./resource/resource-router');
const taskRouter = require('./task/task-router');

const server = express();

server.use(express.json());
server.use('/api/projects', projectRouter);
server.use('/api/resources', resourceRouter);
server.use('/api/tasks', taskRouter);

server.use((err, req, res, next) => { // eslint-disable-line
  res.status(err.status || 500).json({
    sageAdvice: 'You must not let anyone define your limits because of where you come from, but this does not work fool.',
    message: err.message,
  })
})

module.exports = server;
