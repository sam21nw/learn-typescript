import './style.css';
import BankAccount from './bankAccount';

document.querySelector<HTMLDivElement>('#app')!.innerHTML = ``;

type stringOrNumber = string | number | boolean;

const logMsg = (msg: stringOrNumber) => { console.log(msg); };

const account1 = new BankAccount("Dude", 12000);
const account2 = new BankAccount("Rock", 3500);

account1.makeDeposit(10000, new Date(new Date().getTime()).toLocaleString(), "Friend paid me back");
account1.makeWithdrawal(1200, new Date(new Date().getTime()).toLocaleString(), "Rent payment");

account2.makeDeposit(5200, new Date(new Date().getTime()).toLocaleString(), "Friend paid me back");
account2.makeWithdrawal(9000, new Date(new Date().getTime()).toLocaleString(), "Rent payment");

logMsg(account1.getAccountHistory());
logMsg(account2.getAccountHistory());
