// context is globally shared

const bank = {
  "accounts": [
    {
      "name": "peter",
      "email": "peter@bank.edu",
      "balance": 0,
      "password": "secret"
    }
  ]
}

function create() {
  const name = document.getElementById('name');
  const email = document.getElementById('email');
  const password = document.getElementById('password');
  const status = document.getElementById('createstatus');

  bank.accounts.push({
    name: name.value,
    email: email.value,
    password: password.value,
    balance: 0
  });

  name.value = '';
  email.value = '';
  password.value = '';
  status.innerHTML = 'Account Created!';
}