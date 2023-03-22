let numbers = [1, 2, 3, 4, 5];

let evenNumber = numbers.find(num => num % 2 === 0);

let numItem = '';

for (let i = 0; i < numbers.length; i++)
{
    numItem += '<span>' + numbers[i] + ' ' + '</span>';    
}

document.getElementById('ex1_h2').innerHTML = 'Example 1: Find an element in an array of numbers';

document.getElementById('ex1_p1').innerHTML = numItem;

document.getElementById('ex1_p2').innerHTML = 'The first even number in the array is ' + evenNumber;
