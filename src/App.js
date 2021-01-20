import React from 'react';
import ListItems from './ListItems';
import { library } from '@fortawesome/fontawesome-svg-core';
import {faTrash} from '@fortawesome/free-solid-svg-icons';
import {faPen} from '@fortawesome/free-solid-svg-icons';
import './App.css';

library.add(faTrash);
library.add(faPen)

class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      items:[],
      currentItem:{
        text:'',
        key: Date.now(),
        desc:'',
        season:'',
        editable:false
      }
    }
    this.addItem = this.addItem.bind(this);
    this.handleInput = this.handleInput.bind(this);
    this.deleteItem = this.deleteItem.bind(this);
    this.editItem = this.editItem.bind(this);
    this.editItem1 = this.editItem1.bind(this);
    this.editItem2 = this.editItem2.bind(this);
    this.changeEdit = this.changeEdit.bind(this);
    this.handleUpdate = this.handleUpdate.bind(this);
    this.handleCancel = this.handleCancel.bind(this);
  }
  addItem(e){
    e.preventDefault();

    const newItem = this.state.currentItem;
    if(newItem.text!==""){
      const items = [...this.state.items, newItem];
    this.setState({
      items: items,
      currentItem:{
        text:'',
        key: Date.now(),
        desc:'',
        season:'',
        editable:false
      },
      
    });
    }
  }
  handleInput(e){
    const target = e.target;
    const value = target.value;
    const name = target.name;
    this.setState({
      currentItem:{
        ...this.state.currentItem, 
        [name]:value
      }
    })
}

  deleteItem(key) {
    const filteredItems = this.state.items.filter( item =>
      item.key !== key);
      this.setState({
        items : filteredItems
      })
  }

  changeEdit(item){
    var item = item;
    item.editable=true;
    this.setState({item});
  }

  editItem(item, value)
   {
    var item = item;
    item.text = value
    this.setState({item});
  }

  editItem1(item, value)
   {
    var item = item;
    item.desc = value
    this.setState({item});
  }

  editItem2(item, value)
  {
    var item = item;
    item.season = value
    this.setState({item});
  }

  handleUpdate(gItem)
  {
    const newItem = gItem;
    newItem.editable = false;
    const filteredItems = this.state.items.filter( item =>
      item.key !== newItem.key);
      filteredItems.push(newItem);
      this.setState({
      items:filteredItems     
    })
  }

  handleCancel(gItem){
    var item = gItem;
    item.editable= false;
    this.setState({item});
  }
 render(){
  return (
    <div className="App">

      <ListItems text = {this.state.currentItem.text}
          desc = {this.state.currentItem.desc}
          season = {this.state.currentItem.season}
          handleInput = {this.handleInput}
          addItem = {this.addItem}
          items = {this.state.items}
          deleteItem = {this.deleteItem}
          editItem = {this.editItem}
          editItem1 = {this.editItem1}
          editItem2 = {this.editItem2}
          changeEdit = {this.changeEdit}
          handleUpdate = {this.handleUpdate}
          handleCancel = {this.handleCancel}
         ></ListItems>

    </div>
  );
 }
}


export default App;