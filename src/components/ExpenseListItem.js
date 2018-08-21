import React from 'react';
import {Link} from 'react-router-dom';
import moment from 'moment';
import numeral from 'numeral';
export const ExpenseListItem = (props) => (
    <div>
        <div><Link to={`/edit/${props.id}`}>Description: {props.description}</Link></div>
        <div>Amount: {numeral(props.amount/100).format('$0,0.00')}</div>
        <div>
        createdAt: {moment(props.createdAt).format('MMMM Do, YYYY')}
        </div>
    </div>    
);


export default ExpenseListItem;


 