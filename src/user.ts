export default class User {
    private _firstName: string;
    private _lastName: string;
    constructor(firstName: string, lastName: string) {
        this._firstName = firstName;
        this._lastName = lastName;
    }
    get fullName() {
        return `${this._firstName} ${this._lastName}`;
    }
    set fullName(value: string) {
        const [firstName, lastName] = value.split(" ");
        this._firstName = firstName;
        this._lastName = lastName;
    }
}