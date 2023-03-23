let colors = ["red", "green", "blue"];

let color = colors.forEach(color => document.getElementById('ex1_p2').innerHTML += color + ' ');

let colorsItem = '';
for (let i = 0; i < colors.length; i++)
{
    colorsItem += '<span>' + colors[i] + '</span><br>';
}

document.getElementById('ex1_h2').innerHTML = 'Example 1: Display all the elements of an array';

document.getElementById('ex1_p1').innerHTML = colorsItem;

