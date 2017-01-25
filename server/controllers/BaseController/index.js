/*
* Base controller class with basic CRUD functionality
* @param reference {String} reference to the controllers model.
*/
class BaseController {
  constructor(model) {
    // Initiate model from reference
    this.model = model;
  }

  /*
  * Gets document by passed in param
  * @param param {Object} What to search by.
  */
  getBy(param) {
    return this.controller.model.findOne(param).exec();
  }

   /*
   * Gets controllers model's document by ID
   * @param req.params.id {String} ID of the requested document
   */
   getById(id) {
    const ctx = this;
  console.log('heeeeeeeeeeeeeeeeeeeeeeeeeere');
    this.controller.model.findById(id).exec()
    .then((doc) => {
      console.log('made it');
      console.log(ctx.get.emit);
      ctx.socket.emit(ctx.get.emit, doc);
    })
    .catch((err) => {
      console.log(err);
      ctx.socket.emit('err', err);
    });
  }

   /*
   * Gets all controllers model's documents
   */
   getAll() {
     const ctx = this;

    this.controller.model.find({}).exec()
    .then((docs) => {
      ctx.socket.emit(ctx.getAll.emit, docs);
    })
    .catch((err) => {
      ctx.socket.emit('err', err);
    });
  }

  /*
  * Creates controllers model's document
  * @param body {Object} fields for a new model
  * @param hasCreator {boolean} if the object belongs to a user.
  */
  create(body, hasCreator) {
    const newModel = new this.controller.model(body);

    // if (hasCreator) newModel.belongsTo = req.decoded._doc._id;

    return newModel;
  }

  /*
  * Deletes controllers model's document by ID
  * @param req.params.id {String} ID of document to be deleted.
  */
  deleteDocument(id) {
    return this.controller.model.remove({ _id: id }).exec();
  }

  /*
  * Updates controllers model's document by ID
  * @param req.params.id {String} ID of document to be modified
  * @param body {Object} fields that have been modified.
  */
  updateDocument(id, body) {
    return this.controller.model
    .findByIdAndUpdate(id, { $set: body }, { new: true }).exec();
  }


  /*
  * Retrieves documents that belong to a user
  * @param req.decoded._doc._id {String} The users id, from the passed in JWT.
  */
  getByUser(userID) {

    return this.controller.model.find({ belongsTo: userID }).exec();

  }

}

module.exports =  BaseController;
