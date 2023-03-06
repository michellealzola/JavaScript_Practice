let msg = 'Please fill in all fields'

document.getElementById('submitBtn').onclick = function(){
    let name = document.getElementById('name').value;
    let email = document.getElementById('email').value;
    let phone = document.getElementById('phone').value;

    window.alert((name == '' | email == '' | phone == '') ? msg : 'Thank you');
}