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
        <a class="nav-link" href="#">Create Accoiunt</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#">Deposit</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#">Withdraw</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#">Balance</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#">All Data</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#">Login</a>
      </li>
    </ul>
  </div>
</nav>
`;

let navigation = document.getElementById('navigation');
navigation.innerHTML += ui.navigation;