let peoples = 
[
    {name: "John", age: 25},
    {name: "Jane", age: 30},
    {name: "Bob", age: 18},
    {name: "Sarah", age: 22}
];

let adults = peoples.filter(people => people.age >= 20);

let peopleItem = '';
for (let i = 0; i < peoples.length; i++)
{
    peopleItem += '<span>Name: ' + peoples[i].name + '</span><br>';
    peopleItem += '<span>Age: ' + peoples[i].age + '</span><br>';
}

let adultsItem = '';
adultsItem += 'The people 20 years and older are:<br>'
for (let i = 0; i < adults.length; i++)
{
    adultsItem += '<span>Name: ' + adults[i].name + '</span><br>';
    adultsItem += '<span>Age: ' + adults[i].age + '</span><br>';
}

document.getElementById('ex2_h2').innerHTML = 'Example 2: Filter out objects from an array of objects';

document.getElementById('ex2_p1').innerHTML = peopleItem;

document.getElementById('ex2_p2').innerHTML = adultsItem;