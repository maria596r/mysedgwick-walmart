import React from 'react';
import './ExpenseList.css';

function ExpenseList() {
  const expenses = [
    { id: 1, amount: 100, description: 'Office Supplies', category: 'Supplies' },
    { id: 2, amount: 50, description: 'Lunch', category: 'Food' },
  ];

  return (
    <div className="expense-list">
      {expenses.map((expense) => (
        <div key={expense.id} className="expense-item">
          <h3>{expense.description}</h3>
          <p>Amount: ${expense.amount}</p>
          <p>Category: {expense.category}</p>
        </div>
      ))}
    </div>
  );
}

export default ExpenseList;
