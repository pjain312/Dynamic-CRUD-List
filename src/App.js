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
        key: '',
        desc:'',
        season:''
      }
      
    }
    this.addItem = this.addItem.bind(this);
    this.handleInput = this.handleInput.bind(this);
    this.deleteItem = this.deleteItem.bind(this);
    this.editItem = this.editItem.bind(this);
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
        key:'',
        desc:'',
        season:''
      }
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
        key: Date.now(),
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

  editItem(key) {
    const selectedItem = this.state.items.find (item => 
      item.key === key);
    
    this.setState ({
      currentItem : {
        text : selectedItem.text,
        key : selectedItem.key,
        desc : selectedItem.desc,
        season: selectedItem.season
      }
    })
  }
  
 render(){
  return (
    <div className="App">
      <header>
        <form id="form" onSubmit={this.addItem}>
          <label> Fruit Name </label>
          <input name="text" type="text" placeholder="Enter Fruit Name" value= {this.state.currentItem.text} onChange={this.handleInput}></input>
          <label> Fruit Description </label>
          <input name = "desc" type="text" placeholder="Enter Fruit Desc" value= {this.state.currentItem.desc} onChange={this.handleInput}></input>
          <label> Fruit Season </label>
          <input name="season" type="text" placeholder="Enter Fruit Season" value= {this.state.currentItem.season} onChange={this.handleInput}></input>

          <button type="submit">Add Fruit</button>
        </form>
      </header>

      <ListItems items = {this.state.items}
        deleteItem = {this.deleteItem}
        editItem = {this.editItem}></ListItems>

    </div>
  );
 }
}


export default App;