import React from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import './App.css';
import * as ReactBootsrap from 'react-bootstrap';



function ListItems (props) {
    const items = props.items;
    const listItems = items.map(item =>
        {
            return(
                        <tr key = {item.key}>
                            <td>{item.text}</td>
                            <td>{item.desc}</td>
                            <td>{item.season}</td>
                            <td>
                                <FontAwesomeIcon className = "faicon" icon = 'pen'
                                onClick ={ () => props.editItem(item.key) }/>
                            </td>
                            <td>
                                <FontAwesomeIcon className = "faicon" icon = 'trash'
                                onClick ={ () => props.deleteItem(item.key)}/>
                            </td>
                        </tr>
            )
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
                    {listItems}
                </tbody>
            </ReactBootsrap.Table>
        )
}

export default ListItems;
