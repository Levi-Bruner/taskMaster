import ListService from "../Services/ListService.js";
import store from "../store.js"
import listItem from "../Models/ListItem.js";

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
    let listName = event.target.listName.value
    // this is my pojo
    let newList = {
      listName: listName
    }
    ListService.addList(newList)
    _drawLists();
  };
  deleteList(id) {
    if (confirm("Are you sure you want to delete?")) {
      ListService.deleteList(id)
      _drawLists();
    }
  }

  //FIXME this needs the ListId
  addListItem(event, id) {
    event.preventDefault();
    let formData = event.target
    let newListItem = {
      listItemName: formData.listItemName.value
    }
    console.log(newListItem)
    ListService.addListItem(newListItem, id);
    _drawLists();
  }
  //TODO: Your app will need the ability to create, and delete both lists and listItems
}
