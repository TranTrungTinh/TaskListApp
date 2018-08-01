const tasks = [
  { _id: 1, name: 'do something', status: false },
  { _id: 2, name: 'have lunch', status: true },
  { _id: 3, name: 'learn React', status: true },
  { _id: 4, name: 'learn Node', status: false },
  { _id: 5, name: 'learn React Native', status: false }
];

class TaskService {
  static getAll() {
    return tasks;
  }

  static addTask(name) {
    const task = {
      _id: tasks.length + 1,
      name: name,
      status: false
    };
    tasks.push(task);
    return tasks;
  }

  static updateStatus(_id) {
    const item = tasks.find(e => e._id === +_id);
    if(!item) return tasks;
    item.status = !item.status;
    return tasks;
  }

  static removeTask(_id) {
    const index = tasks.findIndex(e => e._id === +_id);
    tasks.splice(index, 1);
    return tasks;
  }
}

module.exports = { TaskService };