
class BaseSocket {
  constructor(controller, nameSpace, socket) {
    this.controller = new controller();
    this.socket = socket;
    this.get = {
      on: nameSpace + ':' + 'Get',
      emit: nameSpace + ':' + 'Show'
    };
    this.getAll = {
      on: nameSpace + ':' + 'GetAll',
      emit: nameSpace + ':' + 'NewAll'
    };
  }

  readById(id) {
    const ctx = this;

    this.socket.on(this.get.on, (id) => {
      console.log('made it');
      ctx.controller.getById.bind(this, id)();
    });
  }

  getAllDocs() {
    this.socket.on(this.getAll.on, this.controller.getAll.bind(this));
  }

  initiateEvents() {
    this.getAllDocs();
    this.readById();
  }
}

module.exports = BaseSocket;
