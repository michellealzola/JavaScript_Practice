let numbers = [1, 2, 3, 4, 5];

let sum = numbers.reduce((accumulator, currentValue) => accumulator + currentValue, 0);

let numbersItem = '';
for (let i = 0; i < numbers.length; i++)
{
    numbersItem += '<span>' + numbers[i] + '</span><br>';
}

document.getElementById('ex1_h2').innerHTML = 'Example 1: Find the sum of all the elements of an array';

document.getElementById('ex1_p1').innerHTML = numbersItem;

document.getElementById('ex1_p2').innerHTML = 'The sum is ' + sum;