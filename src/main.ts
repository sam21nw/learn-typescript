import ArrayUtils from './arrayUtils';
import './style.css';

document.querySelector<HTMLDivElement>('#app')!.innerHTML = ``;

type stringOrNumber = string | number | boolean;

const logMsg = (msg: stringOrNumber) => { console.log(msg); };

try {
    logMsg(ArrayUtils.average([1, 2, 3, 4, 5])); // Output: 3
    logMsg(ArrayUtils.max([1, 2, 3, 4, 5]));     // Output: 5
} catch (error: any) {
    console.error(error.message);
}

try {
    const instance = new ArrayUtils(); // This will throw an error
} catch (error: any) {
    console.error(error.message); // Output: ArrayUtils cannot be instantiated.
}
