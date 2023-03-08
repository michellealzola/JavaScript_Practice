window.addEventListener('load', categoryLoad);


function categoryLoad()
{
    let leftCode = '';    
    let category ='';
    for (let i = 0; i < categories.length; i++)
    {    
        category = categories[i];

        leftCode += '<ul>';
        leftCode += '<li id="' + category + '">';
        leftCode += category;
        leftCode += '</li>';
        leftCode += '</ul>';        
    }

    document.getElementById('categories').innerHTML = leftCode; 
    
    for (let k = 0; k < categories.length; k++)
    {
        if (categories[k] === 'home')
        {
            document.getElementById('home').onclick = function()
            {   
                let categoryItem = ''; 
                for (let i = 0; i < home.length; i++)
                {
                    categoryItem += '<input type="checkbox"/><label>' + home[i] + '</label><br>';
                }
                    document.getElementById('to-do').innerHTML = categoryItem;
            }
        }

        if (categories[k] === 'office')
        {
            document.getElementById('office').onclick = function()
            {   
                let categoryItem = ''; 
                for (let i = 0; i < office.length; i++)
                {
                    categoryItem += '<input type="checkbox"/><label>' + office[i] + '</label><br>';
                }
                    document.getElementById('to-do').innerHTML = categoryItem;
            }
        }

        if (categories[k] === 'health')
        {
            document.getElementById('health').onclick = function()
            {   
                let categoryItem = ''; 
                for (let i = 0; i < health.length; i++)
                {
                    categoryItem += '<input type="checkbox"/><label>' + health[i] + '</label><br>';
                }
                    document.getElementById('to-do').innerHTML = categoryItem;
            }
        }

        if (categories[k] === 'grocery')
        {
            document.getElementById('grocery').onclick = function()
            {   
                let categoryItem = ''; 
                for (let i = 0; i < grocery.length; i++)
                {
                    categoryItem += '<input type="checkbox"/><label>' + grocery[i] + '</label><br>';
                }
                    document.getElementById('to-do').innerHTML = categoryItem;
            }
        }

        if (categories[k] === 'bills')
        {
            document.getElementById('bills').onclick = function()
            {   
                let categoryItem = ''; 
                for (let i = 0; i < bills.length; i++)
                {
                    categoryItem += '<input type="checkbox"/><label>' + bills[i] + '</label><br>';
                }
                    document.getElementById('to-do').innerHTML = categoryItem;
            }
        }       
        
    }
    
}


