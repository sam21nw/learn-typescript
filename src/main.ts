import './style.css';

document.querySelector<HTMLDivElement>('#app')!.innerHTML = ``;

let stringArr = ["one", "two", "three"];

stringArr.forEach(string => { console.log(string); });

stringArr.push("hey");

let a: string = stringArr[3];

console.log(a);

const obj: object = {
    a: "",
    b: "",
};

type stringOrNumber = string | number;
type stringOrNumberArray = (string | number)[];

type Guitarist = {
    name?: stringOrNumber,
    active?: boolean,
    albums?: stringOrNumberArray,
};

let evh: Guitarist = {
    name: "Eddie",
    active: false,
    albums: ["1984", 1987]
};
let JP: Guitarist = {
    active: false,
    albums: [1988, 5151, "OU812"]
};

const greetGuitarist = (guitarist: Guitarist) => {
    return `Hello "${guitarist.name?.toString}"`;
};
console.log(greetGuitarist(evh));
console.log(greetGuitarist(JP));

// Enums
enum Grade {
    U,
    D,
    C, G,
    F
}

console.log(Grade.U);
