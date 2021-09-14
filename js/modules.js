let ui = {};

ui.navigation = `
<nav class="navbar navbar-expand-lg navbar-light bg-light">
  <a class="navbar-brand" href="#">Zopa Bank</a>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>
  <div class="collapse navbar-collapse" id="navbarSupportedContent">
    <ul class="navbar-nav mr-auto">
      <li class="nav-item active">
        <a class="nav-link" href="#" onclick="loadCreateAccount()">Create Account</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#" onclick="loadDeposit()">Deposit</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#" onclick="loadWithdraw()">Withdraw</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#" onclick="loadBalance()">Balance</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#" onclick="loadAllData()">All Data</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#" onclick="loadLogin()">Login</a>
      </li>
    </ul>
  </div>
</nav>
`;

let navigation = document.getElementById("navigation");
navigation.innerHTML += ui.navigation;

ui.default = `
<div class="card text-white bg-primary mb-3" style="max-width: 18rem;">
  <div class="card-header">Welcome to Zopa Bank</div>
  <div class="card-body">
    <h5 class="card-title">Zopa is here to help you</h5>
    <p class="card-text">Please use the navigation bar to explore your account</p>
    <i class="far fa-piggy-bank"></i>
  </div>
</div>
`;

ui.createAccount = `
<div class="card text-white bg-primary mb-3" style="max-width: 18rem;">
  <div class="card-header">Create Account</div>
  <div class="card-body">
    <form>
    <div class="form-group">
      <label for="exampleInputEmail1">Name</label>
      <input type="text" class="form-control" id="name" aria-describedby="emailHelp" placeholder="Enter Name">
    </div>
    <div class="form-group">
      <label for="exampleInputPassword1">Email</label>
      <input type="text" class="form-control" id="email" placeholder="Enter Email">
    </div>
    <div class="form-group">
      <label for="exampleInputPassword1">password</label>
      <input type="password" class="form-control" id="password" placeholder="Enter Password">
    </div>    
    <button type="submit" class="btn btn-primary" onclick="create()">Create Account</button>
    <div id="createstatus"></div>
    </form>
  </div>
</div>
`;

ui.balance = `
<div class="card text-white bg-primary mb-3" style="max-width: 18rem;">
  <div class="card-header">Your Balance</div>
  <div class="card-body">
    <h5 class="card-title">Primary card title</h5>
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
  </div>
</div>
`;

ui.deposit = `
<div class="card text-white bg-primary mb-3" style="max-width: 18rem;">
  <div class="card-header">Make a Deposit</div>
  <div class="card-body">
    <h5 class="card-title">Primary card title</h5>
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
  </div>
</div>
`;

ui.withdraw = `
<div class="card text-white bg-primary mb-3" style="max-width: 18rem;">
  <div class="card-header">Withdraw Money</div>
  <div class="card-body">
    <h5 class="card-title">Primary card title</h5>
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
  </div>
</div>
`;

ui.alldata = `
<div class="card">
  <p>All data</p>
</div>
`;

ui.login = `
<button type="button" class="btn btn-primary">Create Account</button>
`;

let loadDefault = function () {
  target.innerHTML = ui.default;
};

let loadCreateAccount = function () {
  target.innerHTML = ui.createAccount;
};

let loadBalance = function () {
  target.innerHTML = ui.balance;
};

let loadDeposit = function () {
  target.innerHTML = ui.deposit;
};

let loadWithdraw = function () {
  target.innerHTML = ui.withdraw;
};

let loadAllData = function () {
  target.innerHTML = ui.alldata;
};

let loadLogin = function () {
  target.innerHTML = ui.login;
};

loadDefault();
