let expenses = 
[
    { category: 'Food', amount: 10.50 },
    { category: 'Transportation', amount: 5.25 },
    { category: 'Entertainment', amount: 20.00 },
    { category: 'Food', amount: 7.75 },
    { category: 'Transportation', amount: 3.50 },
    { category: 'Housing', amount: 50.00 }
];

let totalExpenses = expenses.reduce((accumulator, currentValue) => accumulator + currentValue.amount, 0);

let expensesItem = '';
for (let i = 0; i < expenses.length; i++)
{
    expensesItem += '<span>Category:' + expenses[i].category + '</span><br>';
    expensesItem += '<span>Amount: ' + expenses[i].amount + '</span><br>';
}

document.getElementById('ex4_h2').innerHTML = 'Example 4: Given an array of objects representing expenses, find the total amount spent.';

document.getElementById('ex4_p1').innerHTML = expensesItem;

document.getElementById('ex4_p2').innerHTML = 'The total expenses is ' + totalExpenses;