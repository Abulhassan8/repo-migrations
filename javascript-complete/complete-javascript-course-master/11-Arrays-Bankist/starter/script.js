'use strict';

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// BANKIST APP

// Data
const account1 = {
  owner: 'Jonas Schmedtmann',
  movements: [200, 450, -400, 3000, -650, -130, 70, 1300],
  interestRate: 1.2, // %
  pin: 1111,
};

const account2 = {
  owner: 'Jessica Davis',
  movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
  interestRate: 1.5,
  pin: 2222,
};

const account3 = {
  owner: 'Steven Thomas Williams',
  movements: [200, -200, 340, -300, -20, 50, 400, -460],
  interestRate: 0.7,
  pin: 3333,
};

const account4 = {
  owner: 'Sarah Smith',
  movements: [430, 1000, 700, 50, 90],
  interestRate: 1,
  pin: 4444,
};

const accounts = [account1, account2, account3, account4];

// Elements
const labelWelcome = document.querySelector('.welcome');
const labelDate = document.querySelector('.date');
const labelBalance = document.querySelector('.balance__value');
const labelSumIn = document.querySelector('.summary__value--in');
const labelSumOut = document.querySelector('.summary__value--out');
const labelSumInterest = document.querySelector('.summary__value--interest');
const labelTimer = document.querySelector('.timer');

const containerApp = document.querySelector('.app');
const containerMovements = document.querySelector('.movements');

const btnLogin = document.querySelector('.login__btn');
const btnTransfer = document.querySelector('.form__btn--transfer');
const btnLoan = document.querySelector('.form__btn--loan');
const btnClose = document.querySelector('.form__btn--close');
const btnSort = document.querySelector('.btn--sort');

const inputLoginUsername = document.querySelector('.login__input--user');
const inputLoginPin = document.querySelector('.login__input--pin');
const inputTransferTo = document.querySelector('.form__input--to');
const inputTransferAmount = document.querySelector('.form__input--amount');
const inputLoanAmount = document.querySelector('.form__input--loan-amount');
const inputCloseUsername = document.querySelector('.form__input--user');
const inputClosePin = document.querySelector('.form__input--pin');

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// LECTURES

// const currencies = new Map([
//   ['USD', 'United States dollar'],
//   ['EUR', 'Euro'],
//   ['GBP', 'Pound sterling'],
// ]);

// const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

const displayMovements = (account, sort) => {

  const sortedMovements = sort? account.movements.slice().sort((a,b) => a-b): account.movements;
  containerMovements.innerHTML = '';
  sortedMovements.forEach((movement, index) => {

    const type = movement > 0 ? 'deposit' : 'withdrawal';
    const html = `
      <div class="movements__row">
        <div class="movements__type movements__type--${type}">${index + 1} ${type}</div>
        <div class="movements__value">${movement}€</div>
      </div>
    `
    containerMovements.insertAdjacentHTML('afterbegin', html);
  });
};

const calcDisplayBalance = function (acc) {
  acc.balance = acc.movements.reduce((acc, mov) => acc + mov, 0);
  labelBalance.textContent = `${acc.balance}€`;
};

const calcDisplaySummary = function (acc) {
  const incomes = acc.movements
    .filter(mov => mov > 0)
    .reduce((acc, mov) => acc + mov, 0);
  labelSumIn.textContent = `${incomes}€`;

  const out = acc.movements
    .filter(mov => mov < 0)
    .reduce((acc, mov) => acc + mov, 0);
  labelSumOut.textContent = `${Math.abs(out)}€`;

  const interest = acc.movements
    .filter(mov => mov > 0)
    .map(deposit => (deposit * acc.interestRate) / 100)
    .filter((int, i, arr) => {
      // console.log(arr);
      return int >= 1;
    })
    .reduce((acc, int) => acc + int, 0);
  labelSumInterest.textContent = `${interest}€`;
};

const createuserName = (accs) => {
  accs.forEach(acc => {
    acc.username = acc.owner
      .toLowerCase()
      .split(' ')
      .map(name => name[0])
      .join('')
  })
}

createuserName(accounts);

const displayUi = (currentAccount, sort = false) => {
  displayMovements(currentAccount, sort);
  calcDisplayBalance(currentAccount);
  calcDisplaySummary(currentAccount);
};

const startLogoutTimer = () => {
  let time = 10;
  const timer = setInterval(() => {
    const minutes = String(Math.trunc(time/60)).padStart(2, '0');
    const seconds = String(time%60).padStart(2, '0');

    labelTimer.textContent = `${minutes}: ${seconds}`;

    if(time === 0){
      clearInterval(timer);
      containerApp.style.opacity = 0;
    }

    time--;
  },1000);
  
};

let currentAccount;
let sort;

currentAccount = account1;
startLogoutTimer();
displayUi(currentAccount);
containerApp.style.opacity = 100;

const now = new Date();
const date = `${now.getDate()}`.padStart(2, '0');
const month = `${now.getMonth() +1}`.padStart(2, '0');
const year = now.getFullYear();
const hour = `${now.getHours()}`.padStart(2, '0');
const minutes = `${now.getMinutes()}`.padStart(2, '0');
const meridiem = now.getHours() >= 12 ? 'pm' : 'am';

// labelDate.textContent = `${date}/${month}/${year}, ${hour}:${minutes}${meridiem}`;

const options = {
  day: 'numeric',
  month: 'long',
  year: 'numeric',
  hour: 'numeric',
  minute: 'numeric'
};
const locale = navigator.language;
labelDate.textContent = new Intl.DateTimeFormat(locale, options).format(now);

btnLogin.addEventListener('click', (e) => {
  e.preventDefault();
  
  currentAccount = accounts.find(acc => acc.username === inputLoginUsername.value);
  if (currentAccount?.pin === Number(inputLoginPin.value)) {
    labelWelcome.textContent = `Welcome back ${currentAccount.owner.split(' ')[0]}`;
    containerApp.style.opacity = 100;
    inputLoginUsername.value = '';
    inputLoginPin.value = '';

    displayUi(currentAccount);
  }

  btnTransfer.addEventListener('click', (e) => {
    e.preventDefault();

    const transferToAccount = accounts.find(acc => acc.username === inputTransferTo.value);
    console.log(transferToAccount, inputTransferTo.value);
    transferToAccount.movements.push(Number(inputTransferAmount.value));
    currentAccount.movements.pop(Number(inputTransferAmount));
    inputTransferTo.value = '';
    inputTransferAmount.value = '';
    
    displayUi(currentAccount);
  });

  btnLoan.addEventListener('click', (e) => {
    e.preventDefault();

    const loanAmount = Number(inputLoanAmount.value);
    const isLoanAllowed = currentAccount.movements.some(amount => amount >= .1 * loanAmount);

    if(isLoanAllowed) {
      currentAccount.movements.push(loanAmount);
      displayUi(currentAccount);
      inputLoanAmount.value = '';
    } else {
      alert ('You are not eligible for loan');
      inputLoanAmount.value = '';
    }
  });

  btnSort.addEventListener('click', (e) => {
    e.preventDefault();

    sort = !sort;

    displayUi(currentAccount, sort);
  });
});



/////////////////////////////////////////////////
