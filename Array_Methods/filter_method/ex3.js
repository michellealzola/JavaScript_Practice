let numbersList = [1, 2, 3, 2, 4, 3, 5, 6, 1];

let uniqueNum = numbersList.filter((num, index, arr) => arr.indexOf(num) === index);

let numbersListItem = '';
for (let i = 0; i < numbersList.length; i++)
{
    numbersListItem += '<span>' + numbersList[i] + '</span><br>';
}

let uniqueNumItems = '';
for (let i = 0; i < uniqueNum.length; i++)
{
    uniqueNumItems += '<span>' + uniqueNum[i] + '</span><br>';
}

document.getElementById('ex3_h2').innerHTML = 'Example 3: Filter out duplicate values from an array';

document.getElementById('ex3_p1').innerHTML = numbersListItem;

document.getElementById('ex3_p2').innerHTML = uniqueNumItems;