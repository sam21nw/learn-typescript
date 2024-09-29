class Triangle {
    constructor(private a: number, private b: number = 9,) {
        if (!Number.isFinite(a) || a <= 0) {
            throw new Error("Invalid");
        }
        if (!Number.isFinite(b) || b <= 0) {
            throw new Error("Invalid");
        }

        this.a = a;
        this.b = b;
    }
    getTriangleArea(): number {
        return this.a * this.b * .5;
    }
    getTriangleHypotenuse = (): number => {
        return Math.sqrt(this.a ** 2 + this.b ** 2);
    };
}

export { Triangle };
