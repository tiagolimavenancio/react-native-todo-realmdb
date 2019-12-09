import Utils from '../Utils'

class TodoModel {
  constructor (title, completed) {
    this.id = Utils.guid();
    this.title = title;
    this.completed = completed;
    this.createdAt = new Date();
    this.updatedAt = new Date();
  }
}

export default TodoModel;
