let fruits = ['apple', 'banana', 'mango', 'orange', 'papaya'];

let index = fruits.findIndex(fruit => fruit === 'orange')

let fruitItem = '';
for (let i = 0; i < fruits.length; i++)
{
    fruitItem += '<span>Title: ' + fruits[i] + '</span><br>';
    
}


document.getElementById('ex3_h2').innerHTML = 'Example 3: Find the index of an element in an array';

document.getElementById('ex3_p1').innerHTML = fruitItem;

document.getElementById('ex3_p2').innerHTML = 'The fruit "orange" is at index:' + index;