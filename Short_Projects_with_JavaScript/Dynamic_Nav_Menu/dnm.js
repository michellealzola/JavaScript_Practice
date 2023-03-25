let menuItemEntry = document.getElementById('menuItemEntry');
let addButton = document.getElementById('btn-add');
let deleteButton = document.getElementById('btn-delete');
let resetButton = document.getElementById('btn-reset');
let dropdownButton = document.querySelector('.dropdown-button');
let dropdownMenu = document.querySelector('.dropdown-menu');

let menuItems = [];

addButton.addEventListener('click', addMenuItem);
deleteButton.addEventListener('click', deleteMenuItem);
resetButton.addEventListener('click', resetMenu);

function addMenuItem()
{
    let menuItem = menuItemEntry.value;

    menuItems.push(menuItem);

    // reset the input field
    menuItemEntry.value = '';

    updateDropdown();
    
}

function deleteMenuItem()
{
    menuItems.pop();

    // reset the input field
    menuItemEntry.value = '';

    updateDropdown();
}

function resetMenu()
{
    menuItems = [];

    // reset the input field
    menuItemEntry.value = '';

    updateDropdown();
}

function updateDropdown()
{
     // Clear the current dropdown menu
    dropdownMenu.innerHTML = '';

    menuItems.forEach(item => {
        let dropdownItem = document.createElement('a');
        dropdownItem.classList.add('dropdown-item');
        dropdownItem.textContent = item;
        dropdownItem.href = '#' + item;
        dropdownMenu.appendChild(dropdownItem);
    })
}

dropdownButton.addEventListener('click', showMenu);
dropdownMenu.style.display = 'none';

function showMenu() 
{
    if (dropdownMenu.style.display === 'none') {
      dropdownMenu.style.display = 'block';
    } else {
      dropdownMenu.style.display = 'none';
    }
};