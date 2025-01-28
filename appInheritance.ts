import TechnicalSupportTicket from "./child1Inheritance"
import BillingSupportTicket from "./child2Inheritance"

const techTicket = new TechnicalSupportTicket(101, 'Cannot connect to the internet', 'High')
techTicket.displayInfo()

const billingTicket = new BillingSupportTicket(102, 'Incorrect charge on invoice', 'INV-2024-001')
billingTicket.displayInfo()
