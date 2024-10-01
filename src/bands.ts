export default class Bands {
    private dataState: string[];

    constructor() {
        this.dataState = [];
    }

    public get data(): string[] {
        return this.dataState;
    }

    public set data(value: string[]) {
        if (Array.isArray(value) && value.every(el => typeof el === "number")) {
            this.dataState = value;
            return;
        }
        else throw new Error("Param is not an array of strings");
    }
}
