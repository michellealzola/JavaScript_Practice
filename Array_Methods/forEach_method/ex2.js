let numbers = [1, 2, 3, 4, 5];

let multiplier = 2;

let numMultiplied = numbers.forEach(num => document.getElementById('ex2_p2').innerHTML += num * multiplier + ' ');

let numbersItem = '';
for (let i = 0; i < numbers.length; i++)
{
    numbersItem += '<span>' + numbers[i] + '</span><br>';
}

document.getElementById('ex2_h2').innerHTML = 'Example 2: Multiply all the elements of an array by 2';

document.getElementById('ex2_p1').innerHTML = numbersItem;


