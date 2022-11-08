import React from 'react';
import './ExpensesList.css';
import ExpenseItem from './ExpenseItem';


const ExpensesList = (props) => {
    if (props.items2.length === 0) {
        return <h2 className="expenses-list__fallback">No expenses found.</h2>
    }
    return(
        <ul className='expenses-list'>
            {props.items2.map((expense) =>(
                <ExpenseItem
                    key={expense.id}
                    title={expense.title}
                    amount={expense.amount}
                    date={expense.date}
                />
            ))}
        </ul>
    );
};

export default ExpensesList;