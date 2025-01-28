import SupportTicket from "./superInheritance"

export default class BillingSupportTicket extends SupportTicket {
    invoiceID: string

    constructor(id: number, description: string, invoiceID: string) {
        super(id, description)
        this.invoiceID = invoiceID
    }

    displayInfo() {
        super.displayInfo()
        console.log(`The Invoice ID is ${this.invoiceID}.`)
    }
}
