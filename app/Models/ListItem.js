import { generateId } from "../utils.js"

export default class listItem {
  constructor(data) {
    this.listItemName = data.listItemName
    this.id = data.id || generateId()
  }

  get listItemTemplate() {
    return /*html*/`
    <div>
      <span>${this.listItemName}</span> <button title="Delete task" class="btn btn-danger">X</button>
    </div>
    `
  }
}