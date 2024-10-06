import './style.css';
import User from './user';


const user = new User("Dude", "Rock");

console.log(user);

user.fullName = "Ted Lasso";

console.log(user);
