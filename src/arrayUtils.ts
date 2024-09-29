export default class ArrayUtils {
    constructor() {
        throw new Error("ArrayUtils cannot be instantiated.");
    }
    static average(numbers: number[]): number {
        if (numbers.length === 0) {
            throw new Error("Array cannot be empty.");
        }
        const sum = numbers.reduce((acc, num) => acc + num, 0);
        return sum / numbers.length;
    }
    static max(numbers: number[]): number {
        if (numbers.length === 0) {
            throw new Error("Array cannot be empty.");
        }
        return Math.max(...numbers);
    }
}
