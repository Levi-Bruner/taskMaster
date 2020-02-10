import ListService from "../Services/ListService.js";
import store from "../store.js"

//TODO Don't forget to render to the screen after every data change.
function _drawLists() {
  let myLists = store.State.lists
  let listElem = document.getElementById("listRow")
  let template = ""

  myLists.forEach(List => {
    template += List.Template
  })
  listElem.innerHTML = template
}

//Public
export default class ListController {
  constructor() {
    //NOTE: After the store loads, we can automatically call to draw the lists.
    _drawLists();
  }
  addList(event) {
    event.preventDefault();
    let formData = event.target.listName.value
    // this is my pojo
    let newList = {
      listName: formData
    }
    ListService.addList(newList)
    _drawLists();
  };
  deleteList(id) {
    ListService.deleteList(id)
    _drawLists();
  }

  //TODO: Your app will need the ability to create, and delete both lists and listItems
}
