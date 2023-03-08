let questions = 
[
    'Which eyelid-less animal licks its eyeballs to keep them moist?',
    'Which famous author taste-tested Cadbury chocolates as a schoolboy?',
    'Which US state quarter features magnolia blossoms?',
    'What is the square root of 2025?',
    'Which popular sitcom was originally called “Insomnia Cafe” before airing?'
]

let responses = 
[
    'geckos',
    'roald dahl',
    'mississippi',
    '45',
    'friends'
]

let buttons = document.getElementsByClassName('btn');

let ans = '';
for (let i = 0; i < buttons.length; i++)
{   
    let qst = '';
    
    buttons[i].addEventListener('click', function()
    {   
        qst += '<p>' + questions[Number(i)] + '</p>';    
        document.getElementById('question').innerHTML = qst;          
        ans = responses[Number(i)]; 
    });   
    
    let submitButton = document.getElementsByClassName('submit')[0];
    submitButton.addEventListener('click', function() {
        let yourAnswer = document.getElementById('yourAnswer').value;  
        isCorrect(ans, yourAnswer);  
    });
}

function isCorrect(answer, yourAns)
{
    let resp = '';
    if (yourAns.toUpperCase() === answer.toUpperCase())
    {
        resp += '<span>You are Correct</span>'
    }
    else
    {
        resp += '<span>Sorry. Wrong answer.</span>'
    }

    document.getElementById('response').innerHTML = resp;
}
