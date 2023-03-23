let numbers2 = [1, 2, 3, 4, 5];

let average = numbers2.reduce((accumulator, currentValue, index, arr) => (index === arr.length - 1 ? (currentValue + accumulator) / arr.length : currentValue + accumulator), 0);

let numbers2Item = '';
for (let i = 0; i < numbers2.length; i++)
{
    numbers2Item += '<span>' + numbers2[i] + '</span><br>';
}

document.getElementById('ex3_h2').innerHTML = 'Example 3: Find the average value of an array';

document.getElementById('ex3_p1').innerHTML = numbers2Item;

document.getElementById('ex3_p2').innerHTML = 'The average is ' + average;