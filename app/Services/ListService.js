import List from "../Models/List.js";
import store from "../store.js";
import listItem from "../Models/ListItem.js"

//Public
class ListService {
  //TODO  Here is where we handle all of our business logic,
  //given the information you need in the controller,
  //what methods will you need to do when this class is first 'constructed'?
  //NOTE You will need this code to persist your data into local storage, be sure to call the store method to save after each change
  constructor() {
  }
  addList(newList) {
    newList = new List(newList)
    store.State.lists.push(newList)
    store.saveState();
    console.log(store.State.lists)
  }

  addListItem(newListItem, listId) {
    newListItem = new listItem(newListItem)
    let list = store.State.lists.find(list => list.id === listId)
    list.listItem.push(newListItem)
    store.saveState()
  }

  deleteList(id) {
    let listId = store.State.lists.filter(List => List.id !== id)
    store.State.lists = listId
    store.saveState()
  }

  deleteListItem(listId, itemId) {
    let listsId = store.State.lists.find(List => List.id == listId)
    let itemsId = listsId.listItem.findIndex(item => item.id == itemId)
    listsId.listItem.splice(itemsId, 1)
    store.saveState()
  }

}

const SERVICE = new ListService();
export default SERVICE;
