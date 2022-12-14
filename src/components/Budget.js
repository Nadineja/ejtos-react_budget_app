import React, {useState, useContext } from 'react';
import { AppContext } from '../context/AppContext';
import BudgetUpdate from './BudgetUpdate';
import ViewBudget from './ViewBudget'
export default Budget;

const Budget = () => {
    const { budget } = useContext(AppContext);
    const increaseBudget = () => {
        budget.reduce((budget, cost) => {
            return (total += cost)
        })
    }
    dispatch({
        type: 'SET_BUDGET',
        payload: budget
    });

    const decreaseBudget = () => {
        const budget = {
            cost: 10,
        }
        dispatch({
            type: 'SET_BUDGET',
            payload: budget
        });
        return (
            <div className='alert alert-secondary'>
                <span>Budget: £{props.budget}</span>
                <button onClick={event => increaseBudget(props.budget)}>+</button>
                <button onClick={event => decreaseBudget(props.budget)}>-</button>
            </div>
        );

    };
}