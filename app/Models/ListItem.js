import { generateId } from "../utils.js"

export default class listItem {
  constructor(data) {
    this.id = data.id || generateId()
  }

  get Template() {
    debugger
    return /*html*/`
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
    `
  }
}