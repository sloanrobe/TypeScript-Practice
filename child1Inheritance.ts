import SupportTicket from "./superInheritance"

export default class TechnicalSupportTicket extends SupportTicket {
    severityLevel: string

    constructor(id: number, description: string, severityLevel: string) {
        super(id, description)
        this.severityLevel = severityLevel
    }

    displayInfo() {
        super.displayInfo()
        console.log(`The severity level is ${this.severityLevel}.`)
    }
}