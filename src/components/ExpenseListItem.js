import React from 'react';
import {Link} from 'react-router-dom';


export const ExpenseListItem = (props) => (
    <div>
        <div><Link to={`/edit/${props.id}`}>Description: {props.description}</Link></div>
        <div>Amount: {props.amount}</div>
        <div>createdAt: {props.createdAt}</div>
    </div>    
);


export default ExpenseListItem;


 