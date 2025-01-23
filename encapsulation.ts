class bankAccount {
    private balance: number

    constructor(initialBalance: number) {
        this.balance = initialBalance
    }

    makeDeposit(amount: number) {
        if (amount > 0) {
            this.balance += amount
        } else {
            console.log('Initial Balance must be a positive amount.')
        }
    }

    makeWithdrawal(amount: number) {
        if (amount > 0 && amount <= this.balance) {
            this.balance -= amount
        } else {
            console.log('You do not have enough money to make that withdrawal.')
        }
    }

    getBalance(): number {
        return this.balance
    }
}

    const myAccount = new bankAccount(1000)
    console.log(myAccount.getBalance())
    myAccount.makeDeposit(500)
    console.log(myAccount.getBalance())
    myAccount.makeWithdrawal(732)
    console.log(myAccount.getBalance())