let numbers2 = [1, 2, 3, 4, 5];

numbers1.forEach(num => document.getElementById('ex4_p2').innerHTML += num * num + ' ');

let numbers2Item = '';
for (let i = 0; i < numbers2.length; i++)
{
    numbers2Item += '<span>' + numbers2[i] + '</span><br>';
}

document.getElementById('ex4_h2').innerHTML = 'Example 4: Given an array of numbers, calculate the square of each number and print out the result.';

document.getElementById('ex4_p1').innerHTML = numbers1Item;


