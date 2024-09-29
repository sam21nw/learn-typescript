import './style.css';
import "./coder";

import { Triangle } from './triangle';

document.querySelector<HTMLDivElement>('#app')!.innerHTML = ``;

type stringOrNumber = string | number | boolean;

const logMsg = (msg: stringOrNumber) => { console.log(msg); };

const triangle = new Triangle(25, 25);

let area = triangle.getTriangleArea();
let hyp = triangle.getTriangleHypotenuse();

logMsg(area);
logMsg(hyp);
logMsg(triangle instanceof Triangle);
