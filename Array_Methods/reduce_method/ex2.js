let numbers1 = [1, 2, 3, 4, 5];

let max = numbers1.reduce((accumulator, currentValue) => (currentValue > accumulator ? currentValue : accumulator), 0);

let numbers1Item = '';
for (let i = 0; i < numbers1.length; i++)
{
    numbers1Item += '<span>' + numbers1[i] + '</span><br>';
}

document.getElementById('ex2_h2').innerHTML = 'Example 2: Find the maximum value of an array';

document.getElementById('ex2_p1').innerHTML = numbersItem;

document.getElementById('ex2_p2').innerHTML = 'The maximum is ' + max;