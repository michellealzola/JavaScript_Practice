let menuItems = document.getElementsByClassName('menuItem');

let menuItemsLength = menuItems.length;

for (let i = 0; i < menuItemsLength; i++)
{
    menuItems[i].addEventListener('click', calcTotal);
}

function calcTotal()
{
    let orderTotal = 0;

    for (let i = 0; i < menuItemsLength; i++)
    {
        if (menuItems[i].checked)
        {
            orderTotal += Number(menuItems[i].value);
        }
    }

    document.getElementById('billTotal').innerHTML = formatCurrency(orderTotal);    
}

function formatCurrency(value)
{
    return '$' + value.toFixed(2);
}