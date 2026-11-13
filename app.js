// Puzzle locale: la password e la soluzione nel browser non sono segreti protetti.
// Impostare qui le coordinate autorizzate, es. "45.123456, 9.123456".
const ACCESS_PASSWORD = 'FICA160H';
const DESTINATION = '45.090383281205106, 7.570205673470828';

const form = document.querySelector('#unlock-form');
const password = document.querySelector('#password');
const toggle = document.querySelector('#toggle');
const gateway = document.querySelector('#gateway');
const solution = document.querySelector('#solution');
const status = document.querySelector('#status');

function setStatus(message, error = false) {
  status.textContent = message;
  status.classList.toggle('error', error);
}

function hidePassword() {
  password.type = 'password';
  toggle.textContent = 'MOSTRA';
  toggle.setAttribute('aria-label', 'Mostra password');
  toggle.setAttribute('aria-pressed', 'false');
}

toggle.addEventListener('click', () => {
  const show = password.type === 'password';
  password.type = show ? 'text' : 'password';
  toggle.textContent = show ? 'NASCONDI' : 'MOSTRA';
  toggle.setAttribute('aria-label', show ? 'Nascondi password' : 'Mostra password');
  toggle.setAttribute('aria-pressed', String(show));
});

form.addEventListener('submit', (event) => {
  event.preventDefault();
  if (password.value !== ACCESS_PASSWORD) {
    setStatus('× ACCESSO NEGATO. CHIAVE NON VALIDA. RIPROVA.', true);
    password.setAttribute('aria-invalid', 'true');
    password.setAttribute('aria-describedby', 'status');
    form.classList.remove('shake');
    void form.offsetWidth;
    form.classList.add('shake');
    password.focus();
    password.select();
    return;
  }
  gateway.hidden = true;
  solution.hidden = false;
  if (DESTINATION) {
    document.querySelector('#coordinates').textContent = 'LA CHIAVE SI TROVA A COORDINATE ' + DESTINATION;
    document.querySelector('#destination-note').textContent = 'LE CASSE CHE PUZZANO DI BRUCIATO';
  }
  password.value = '';
  hidePassword();
  password.removeAttribute('aria-invalid');
  setStatus('● ACCESSO AUTORIZZATO / TRASMISSIONE COMPLETATA');
  document.querySelector('#lock').focus();
});

document.querySelector('#lock').addEventListener('click', () => {
  gateway.hidden = false;
  solution.hidden = true;
  form.reset();
  hidePassword();
  password.removeAttribute('aria-invalid');
  setStatus('● IN ATTESA DELLA CHIAVE DI DECRITTAZIONE_');
  password.focus();
});
