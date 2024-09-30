import './style.css';
import Bands from './bands';

document.querySelector<HTMLDivElement>('#app')!.innerHTML = ``;

type stringOrNumber = string | number | boolean;

const logMsg = (msg: stringOrNumber) => { console.log(msg); };

const myBands = new Bands();
myBands.data = ["Neil", "Led", 123];
console.log(myBands.data);
