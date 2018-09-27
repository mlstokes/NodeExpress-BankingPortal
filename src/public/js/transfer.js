let from = document.querySelector('#from');
let to = document.querySelector('#to');
let transferForm = document.querySelector('#transferForm');

function validate(evt){
  evt.preventDefault();
  document.querySelector('.error').innerHTML = '';
  if(from.value === to.value) {
    document.querySelector('.error').innerHTML = 'You can not transfer to the same account!';
  } else if(amount.value === '0') {
    // mls added this just to learn more about forms.
    // and to mess around with validation
    document.querySelector('.error').innerHTML = 'What\'s the point of transferring $0?';
  } else if(evt.type === "submit") {
    transferForm.submit();
  }
}

to.addEventListener("change", validate);
from.addEventListener("change", validate);
transferForm.addEventListener('submit', validate)