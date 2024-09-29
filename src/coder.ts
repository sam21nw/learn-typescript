class Coder {
    constructor(
        public readonly name: string,
        public age: number = 21,
    ) {
        this.name = name;
        this.age = age;
    }
}

class WebDev extends Coder {
    constructor(
        public developer: Coder,
        public music: string,
        name: string,
        age: number = 21,
    ) {
        super(name, age);
        this.music = music;
        this.developer = developer;
    }
}

export { Coder, WebDev };
