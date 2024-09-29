class Transaction {
    constructor(
        public amount: number,
        public date: string,
        public notes: string,
    ) { }
}

export default class BankAccount {
    readonly number: string;
    owner: string;
    private static accountNumberSeed: number = 1234567890;
    private allTransactions: Transaction[] = [];

    constructor(
        name: string,
        initialBalance: number,
    ) {
        this.number = BankAccount.accountNumberSeed.toString();
        BankAccount.accountNumberSeed++;

        this.owner = name;
        this.makeDeposit(initialBalance, new Date(new Date().getTime()).toLocaleString(), "Initial balance");
    }

    getBalance(): number {
        let balance = 0;
        for (const item of this.allTransactions) {
            balance += item.amount;
        }
        return balance;
    }
    makeDeposit(amount: number, date: string, note: string): void {
        if (amount <= 0) {
            throw new Error("Amount of deposit must be positive");
        }
        const deposit = new Transaction(amount, date, note);
        this.allTransactions.push(deposit);
    }
    makeWithdrawal(amount: number, date: string, note: string): void {
        if (amount <= 0) {
            throw new Error("Amount of withdrawal must be positive");
        }
        if (this.getBalance() - amount < 0) {
            throw new Error("Not sufficient funds for this withdrawal");
        }
        const withdrawal = new Transaction(-amount, date, note);
        this.allTransactions.push(withdrawal);
    }

    getAccountHistory(): string {
        console.log(this.owner);
        console.log(this.number);
        let report = "Date\t\t\t\t\tAmount\tBalance\tNote\n";
        let balance = 0;
        for (const item of this.allTransactions) {
            balance += item.amount;
            report += `${item.date.toString()}\t${item.amount}\t${balance}\t${item.notes}\n`;
        }
        return report;
    }
}
