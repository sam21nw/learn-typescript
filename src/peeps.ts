export default class Peeps {
    static count: number = 0;

    static getCount(): number {
        return Peeps.count;
    }

    public id: number;

    constructor(public name: string) {
        this.id = ++Peeps.count;
        this.name = name;
    };
}