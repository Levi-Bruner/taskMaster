import { generateId } from "../utils.js"
import List from "../Models/List.js"

export default class listItem {
  constructor(data) {
    this.listItemName = data.listItemName
    this.id = data.id || generateId()
  }

  get listItemTemplate() {
    return /*html*/`
    <div>
      <span>${this.listItemName}</span>
    </div>
    `
  }
}