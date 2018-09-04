import React from 'react';
import {Link} from 'react-router-dom';
import moment from 'moment';
import numeral from 'numeral';
export const ExpenseListItem = (props) => (
    <Link 
        className="list-item"
        to={`/edit/${props.id}`}>
        <div>
            <h3 className="list-item__title">{props.description}</h3>
            <span className="list-item_subtitle">
                {moment(props.createdAt).format('MMMM Do, YYYY')}
            </span>
        </div>
        <div>
            <h3 className="list-item__data">{numeral(props.amount/100).format('$0,0.00')}</h3>
        </div>
    </Link> 
);


export default ExpenseListItem;


 