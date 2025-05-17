const firstName = localStorage.getItem('fn');
const lastName = localStorage.getItem('ln');
const email = localStorage.getItem('ea');
const sex = localStorage.getItem('s');
const reason = localStorage.getItem('reason');



console.log("localStorage values:", {firstName, lastName, email, sex, reason});

document.getElementById('firstnameDisplay').textContent = firstName || 'Not provided';
document.getElementById('lastnameDisplay').textContent = lastName || 'Not provided';
document.getElementById('emailDisplay').textContent = email || 'Not provided';
document.getElementById('sexDisplay').textContent = sex || 'Not provided';
document.getElementById('reasonDisplay').textContent = reason || 'Not provided';


if (!firstName || !lastName || !email) {
    alert("Some profile information is missing - please sign up first.");
    }