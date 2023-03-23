let numbers1 = [1, 2, 3, 4, 5];

let sum = 0;

numbers1.forEach(num => sum += num);

let numbers1Item = '';
for (let i = 0; i < numbers1.length; i++)
{
    numbers1Item += '<span>' + numbers1[i] + '</span><br>';
}

document.getElementById('ex3_h2').innerHTML = 'Example 3: Find the sum of all the elements of an array';

document.getElementById('ex3_p1').innerHTML = numbers1Item;

document.getElementById('ex3_p2').innerHTML =sum;
