let books = 
[
    { title: 'To Kill a Mockingbird', author: 'Harper Lee', rating: 4.2 },
    { title: '1984', author: 'George Orwell', rating: 4.0 },
    { title: 'The Catcher in the Rye', author: 'J.D. Salinger', rating: 3.8 },
    { title: 'The Great Gatsby', author: 'F. Scott Fitzgerald', rating: 4.3 },
    { title: 'Brave New World', author: 'Aldous Huxley', rating: 3.9 }
];

let ratingList = books.filter(book => book.rating >= 4);

let booksList = '';
for (let i = 0; i < books.length; i++)
{
    booksList += '<span>Title:' + books[i].title + '</span><br>';
    booksList += '<span>Author:' + books[i].author + '</span><br>';
    booksList += '<span>Rating:' + books[i].rating + '</span><br>';

}

let ratingListItems = '';
for (let i = 0; i < ratingList.length; i++)
{
    ratingListItems += '<span>Title:' + ratingList[i].title + '</span><br>';
    ratingListItems += '<span>Author:' + ratingList[i].author + '</span><br>';
    ratingListItems += '<span>Rating:' + ratingList[i].rating + '</span><br>';
}

document.getElementById('ex4_h2').innerHTML = 'Given an array of objects representing books, filter out all books that have a rating of less than 4.';

document.getElementById('ex4_p1').innerHTML = booksList;

document.getElementById('ex4_p2').innerHTML = ratingListItems;