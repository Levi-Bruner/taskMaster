import List from "./Models/List.js";
import listItem from "./Models/ListItem.js"

let _state = {
  /** @type {List[]} */
  lists: [],
  // /** @type {listItem[]} */
  // listItem: []
};

//NOTE You should not need to change the code from this point down

//NOTE this method will get the lists from local storage at the start of the app
function _loadState() {
  let data = JSON.parse(localStorage.getItem("TaskMaster"));
  if (data) {
    data.lists = data.lists.map(l => {
      let savedList = new List(l)
      savedList.listItem = savedList.listItem.map(i => new listItem(i))
      return savedList
    })

    _state = data;
  }
}
_loadState();

class Store {
  /**
   * Provides access to application state data
   */
  get State() {
    return _state;
  }

  //NOTE call saveState everytime you change the state in any way
  saveState() {
    localStorage.setItem("TaskMaster", JSON.stringify(_state));
  }
}

const store = new Store();
export default store;
