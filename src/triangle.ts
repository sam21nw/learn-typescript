class Triangle {
    constructor(
        public a: number,
        public b: number,
    ) {
        this.a = a;
        this.b = b;
    }
    public getTriangleArea(): number {
        return this.a * this.b * .5;
    }
    public getTriangleHypotenuse = (): number => {
        return Math.sqrt(this.a ** 2 + this.b ** 2);
    };
}

export { Triangle };
