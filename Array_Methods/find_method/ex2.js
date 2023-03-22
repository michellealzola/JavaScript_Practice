let books = 
[
    {title: "The Alchemist", author: "Paulo Coelho"},
    {title: "To Kill a Mockingbird", author: "Harper Lee"},
    {title: "The Great Gatsby", author: "F. Scott Fitzgerald"}
];

let book = books.find(book => book.title === 'The Alchemist');

let bookItem = '';
for (let i = 0; i < books.length; i++)
{
    bookItem += '<span>Title: ' + books[i].title + ' - ';
    bookItem += 'Author: ' + books[i].author + '</span><br><br>';
}


document.getElementById('ex2_h2').innerHTML = 'Example 2: Find an object in an array of objects';

document.getElementById('ex2_p1').innerHTML = bookItem;

document.getElementById('ex2_p2').innerHTML = 'The book "The Alchemist" is found with the following info: <br><br>Title: ' + book.title + ' - Author: ' + book.author;