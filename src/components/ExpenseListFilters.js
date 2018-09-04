import React from 'react';
import {DateRangePicker} from 'react-dates';

import {connect} from 'react-redux';
import { setTextFilter } from '../actions/filters';
import { sortByAmount, sortByDate,setStartDate, setEndDate } from '../actions/filters';

export class ExpenseListFilters extends React.Component{
    state = {
        calFocused: null
    }

    onDatesChange = ({startDate, endDate}) => {
        this.props.setStartDate({startDate});
        this.props.setEndDate({endDate});
    }
    onFocusChange = (calFocused) => {
        this.setState(()=> ({calFocused}));
    }
    onTextChange = (e) => {
        this.props.setTextFilter(e.target.value);
    }
    onSortChange = (e) => {
        if(e.target.value === 'date'){                
            this.props.sortByDate();
        }else{
            this.props.sortByAmount();
        }
    }

    render() {
        return (
            <div className="content-container">
                <div className="input-group">
                    <div className="input-group__item">
                        <input 
                        placeholder="Search expenses"
                        className="text-input"
                        type="text" 
                        value={this.props.filters.text} 
                        onChange={this.onTextChange}/>
                    </div>
                    <div className="input-group__item">
                        <select className="select" 
                            value={this.props.filters.sortBy} 
                            onChange={this.onSortChange}>
                            <option value="date">Date</option>
                            <option value="amount">Amount</option>
                        </select>
                    </div>
                    <div className="input-group__item">
                        <DateRangePicker
                            focusedInput={this.state.calFocused}
                            startDate={this.props.filters.startDate}
                            endDate={this.props.filters.endDate}
                            onDatesChange={this.onDatesChange}
                            onFocusChange={this.onFocusChange}
                            numberOfMonths={1}
                            isOutsideRange={()=> false}
                            showClearDates={true}
                        />
                    </div>
                </div>
            </div>
        );
    }

} 


const mapStateToProps = (state) => {
    return {
        filters: state.filters
    };
};
const mapDispatchToProps = (dispatch) => ({
    sortByDate: () => dispatch(sortByDate()),
    sortByAmount: () => dispatch(sortByAmount()),
    setTextFilter: (text) => dispatch(setTextFilter(text)),
    setEndDate: (endDate) => dispatch(setEndDate(endDate)),
    setStartDate: (startDate) => dispatch(setStartDate(startDate))
});

export default connect(mapStateToProps, mapDispatchToProps)(ExpenseListFilters);