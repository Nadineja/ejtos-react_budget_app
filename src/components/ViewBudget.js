import React from 'react';
import Budget from './Budget'

const ViewBudget = (props) => {
	return (
	     <>
			<span>Budget: £{props.budget}</span>
            <button type='button' class='button button primary' onClick={props.handleEditClick}>
            +
            </button>
            <button type='button' class='button button primary' onClick={props.handleEditClick}>-</button>
    
		</>
	);
};

export default ViewBudget;
