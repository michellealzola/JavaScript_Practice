let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

let evenNum = numbers.filter(num => num % 2 === 0);

let numbersItem = '';
for (let i = 0; i < numbers.length; i++)
{
    numbersItem += '<span>' + numbers[i] + '</span><br>';
}

let evenNumItems = '';
for (let i = 0; i < evenNum.length; i++)
{
    evenNumItems += '<span>' + evenNum[i] + '</span><br>';
}

document.getElementById('ex1_h2').innerHTML = 'Example 1: Filter out even numbers from an array of numbers';

document.getElementById('ex1_p1').innerHTML = numbersItem;

document.getElementById('ex1_p2').innerHTML = evenNumItems;