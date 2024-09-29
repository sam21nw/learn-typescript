import './style.css';
import StringBuilder from './stringBuilder';

document.querySelector<HTMLDivElement>('#app')!.innerHTML = ``;

type stringOrNumber = string | number | boolean;

const logMsg = (msg: stringOrNumber) => { console.log(msg); };

const sb = new StringBuilder();
sb.append("This is ");
sb.append("better than");

logMsg(sb.toString());
sb.clear();
logMsg(sb.toString());
