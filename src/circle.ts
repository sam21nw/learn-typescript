export default class Circle {
    private _radius: number;
    private _color: string;
    static allowedColors: Set<string> = new Set(["red", "blue", "green"]);

    constructor(radius: number, color: string) {
        this._radius = radius;
        if (!Circle.allowedColors.has(color)) {
            throw new Error("This color is not allowed");
        }
        this._color = color;
    }

    get diameter(): number {
        return this._radius * 2;
    }
    get radius(): number {
        return this._radius;
    }

    set radius(value: number) {
        if (value < 0) {
            throw new Error("Radius cannot be -ve");
        }
        this._radius = value;
    }

    get color(): string {
        return this._color;
    }

    set color(newColor: string) {
        if (!Circle.allowedColors.has(newColor)) {
            throw new Error("This color is not allowed");
        }
        this._color = newColor;
    }
}
