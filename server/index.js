const express = require('express');
const parser = require('body-parser');
const cors = require('cors');

const { TaskService } = require('./service/TaskService');

const app = express();

app.use(parser.json());
app.use(cors());

app.listen(3030, () => console.log('Server started'));
app.get('/', (req, res) => res.send({ success: true, message: 'Server worked' }));

app.route('/api/task')
.get((req, res) => {
  const data = TaskService.getAll();
  res.send({ success: true, tasks: data });
})
.post((req, res) => {
  const data = TaskService.updateStatus(req.body._id);
  res.send({ success: true, tasks: data });
})

app.post('/api/task/:_id', (req, res) => {
  const data = TaskService.removeTask(req.params._id);
  res.send({ success: true, tasks: data });
})

app.post('/api/newtask', (req, res) => {
  const data = TaskService.addTask(req.body.name);
  res.send({ success: true, tasks: data });
})

