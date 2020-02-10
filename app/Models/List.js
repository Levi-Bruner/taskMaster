import { generateId } from "../utils.js";
import listItem from "./ListItem.js";

export default class List {
  /**
   * 
   * @param {{id: string; listName: any; listItem: any}} data 
   */
  constructor(data) {
    // the data coming in is my pojo from controller
    //TODO Your constructor takes in a data object that should have the properties you need to create your list here is a freebie, it will set the id its provided, or if that is undefined it will create a new one (this is an alternative to object destructuring)
    this.id = data.id || generateId();
    this.listName = data.listName
    this.listItem = data.listItem || []
  }

  //FIXME the delete will need both the listId and the listItemId or its Index

  get listItemTemplate() {
    let template = ""
    this.listItem.forEach(item => {
      template += item.listItemTemplate
    })
    return template
  }

  get Template() {
    return `
    <div class="col-4 list">
      <h3>${this.listName} <button onclick="app.listController.deleteList('${this.id}')" title="Delete List"
        class="btn btn-danger">X</button></h3>
      <form class="input-group mb-3" onsubmit="app.listController.addListItem(event,'${this.id}')">
        <input type="text" name = "listItemName" class="form-control" placeholder="Add a task">
          <div class="input-group-append">
            <button type="submit" title="Create task"
              class="btn btn-success"><i class="fa fa-check-circle"></i></button>
            <button title="Delete task" class="btn btn-danger">X</button>
            <div class="form-check">
              <label class="form-check-label">
              </label>
            </div>
          </div>
        </input>
      </form>
      <div>
      ${this.listItemTemplate}
      </div>
    </div>`

  }
  //Be sure to add the methods needed to create the view template for this model
  //For starting out, your tasks may be strings alone, but later you may wish to turn them into full objects, that will be up to you
}
