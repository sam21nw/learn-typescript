import './style.css';
import "./coder";

import { Triangle } from './triangle';

document.querySelector<HTMLDivElement>('#app')!.innerHTML = ``;

type stringOrNumber = string | number;

const logMsg = (msg: stringOrNumber) => { console.log(msg); };

const triangle = new Triangle(23, 5);

let area = triangle.getTriangleArea();
logMsg(area);

let hyp = triangle.getTriangleHypotenuse();
logMsg(hyp);