import React from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import './App.css';
import * as ReactBootsrap from 'react-bootstrap';



function ListItems (props) {
    const items = props.items;
    const listItems = items.map(item =>
        {   
            if(item.editable){
            return(
                        <tr key = {item.key} >
                            <td><input type ="text" 
                            name = "text"
                            id= {item.key} 
                            defaultValue ={item.text}
                            onChange ={
                            (e) =>props.editItem(item,e.target.value)}        
                            ></input></td>
                            <td><input type ="text" 
                            name = "desc"
                            id= {item.key} 
                            defaultValue ={item.desc}
                            onChange ={(e)=>props.editItem1(item,e.target.value)} 
                            ></input></td>
                            <td><input type ="text" 
                            name = "season"
                            id= {item.key} 
                            defaultValue ={item.season}
                            onChange ={(e)=>props.editItem2(item, e.target.value)}
                            ></input></td>
                            <td> <button type="submit" onClick = {()=>props.handleUpdate(item)}>Update</button>
                            <button type="submit" onClick = {()=> props.handleCancel(item)}>Cancel</button>
                            </td>

                        </tr>
            );
        }
            return(
                <tr key = {item.key}>
                            <td>{item.text}</td>
                            <td>{item.desc}</td>
                            <td>{item.season}</td>
                            <td>
                                <FontAwesomeIcon className = "faicon" icon = 'pen'
                                onClick ={ () => props.changeEdit(item) }/>
                            </td>
                            <td>
                                <FontAwesomeIcon className = "faicon" icon = 'trash'
                                onClick ={ () => props.deleteItem(item.key)}/>
                            </td>
                        </tr>
            );
        })
    

        return(
            <ReactBootsrap.Table striped bordered hover>
                <thead>
                    <tr>
                    <th>Fruit Name</th>
                    <th>Fruit Description</th>
                    <th>Fruit Season</th>
                    </tr>
                </thead>
                <tbody>
                <tr>
                    <td><input name="text" type="text" placeholder="Enter Fruit Name" value= {props.text} onChange={props.handleInput}></input></td>
                    <td><input name = "desc" type="text" placeholder="Enter Fruit Desc" value= {props.desc} onChange={props.handleInput}></input></td>
                    <td><input name="season" type="text" placeholder="Enter Fruit Season" value= {props.season} onChange={props.handleInput}></input></td>
                    <td> <button type="submit" onClick = {props.addItem}>Add Fruit</button></td>
                    </tr>
                    {listItems}
                </tbody>
            </ReactBootsrap.Table>
        )
}

export default ListItems;
