import { generateId } from "../utils.js";

export default class List {
  /**
   * 
   * @param {{id: string; listName: any}} data 
   */
  constructor(data) {
    // the data coming in is my pojo from controller
    //TODO Your constructor takes in a data object that should have the properties you need to create your list here is a freebie, it will set the id its provided, or if that is undefined it will create a new one (this is an alternative to object destructuring)
    this.id = data.id || generateId();
    this.name = data.listName
  }
  get Template() {
    return `
    <div class="col-4 list">
      <h3>${this.name} <button onclick="app.listController.deleteList(${this.id})" title="Delete List"
        class="btn btn-danger">X</button></h3>
      <div class="input-group mb-3">
        <input type="text" class="form-control" placeholder="Add a task">
          <div class="input-group-append">
            <button type="submit" onsubmit="app.listController.addListItem(event)" title="Create task"
              class="btn btn-success"><i class="fa fa-check-circle"></i></button>
            <button title="Delete task" class="btn btn-danger">X</button>
            <div class="form-check">
              <label class="form-check-label">
              </label>
            </div>
          </div>
        </input>
      </div>
    </div>`

  }
  //Be sure to add the methods needed to create the view template for this model
  //For starting out, your tasks may be strings alone, but later you may wish to turn them into full objects, that will be up to you
}
