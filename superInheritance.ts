export default class SupportTicket {
    id: number
    description: string

    constructor(id: number, description: string) {
        this.id = id
        this.description = description
    }

    displayInfo(): void {
        console.log(`The Support Ticket ID number is ${this.id} and says "${this.description}".`)
    }
}
