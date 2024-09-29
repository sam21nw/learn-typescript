export default class StringBuilder {
    private strings: string[] = [];

    append(value: string): void {
        if (value) {
            this.strings.push(value);
        }
    }

    clear(): void {
        this.strings.length = 0;
    }

    toString(): string {
        return this.strings.join("");
    }
}
