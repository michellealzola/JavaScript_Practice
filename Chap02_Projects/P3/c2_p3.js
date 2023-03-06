let SQUARE_MSG = 'You are hovering over the square';
let TRIANGLE_MSG = 'You are hovering over the triangle';
let CIRCLE_MSG = 'You are hovering over the square';

document.getElementById('square').onmouseover = function(){
    document.getElementById('msg').innerHTML = SQUARE_MSG
}

document.getElementById('triangle').onmouseover = function(){
    document.getElementById('msg').innerHTML = TRIANGLE_MSG
}

document.getElementById('circle').onmouseover = function(){
    document.getElementById('msg').innerHTML = CIRCLE_MSG
}

document.getElementById('square').onmouseout = function(){
    document.getElementById('msg').innerHTML = ''
}

document.getElementById('triangle').onmouseout = function(){
    document.getElementById('msg').innerHTML = ''
}

document.getElementById('circle').onmouseout = function(){
    document.getElementById('msg').innerHTML = ''
}