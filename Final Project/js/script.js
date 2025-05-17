document.getElementById('signupForm').addEventListener('submit', function(event) {
    event.preventDefault();

const errorElements = document.querySelectorAll('.required');

for (let i = 0; i < errorElements.length; i++) {
    errorElements[i].textContent = '';
}

let isValid=true;

const firstName = document.getElementById('fn').value.trim();
const lastName = document.getElementById('ln').value.trim();
const sex = document.querySelector('input[name="sex"]:checked');
const email = document.getElementById('ea').value.trim();
const password = document.getElementById('pass').value.trim();
const supportReason = document.getElementById('reason').value.trim();

if (!firstName) {
    document.getElementById('fnError').textContent = 'required';
    isValid = false;
    }
if (!lastName) {
    document.getElementById('lnError').textContent = 'required';
    isValid = false;
    }
if (!sex) {
    document.getElementById('sError').textContent = 'required';
    isValid = false;
    }
if (!email) {
    document.getElementById('eaError').textContent = 'required';
    isValid = false;
    }
if (!password) {
    document.getElementById('passError').textContent = 'required';
    isValid = false;
}
if (!supportReason) {
    document.getElementById('reasonError').textContent = 'required';
    isValid = false;
    }

if (isValid) {
        localStorage.setItem('fn', firstName);
        localStorage.setItem('ln', lastName);
        localStorage.setItem('ea', email);
        localStorage.setItem('s', sex.value);
        localStorage.setItem('reason', supportReason);
        window.location.href = '../Pages/profile.html'; 
    }

})

  