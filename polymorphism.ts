import SupportTicket from "./superInheritance";
import BillingSupportTicket from "./child2Inheritance";
import TechnicalSupportTicket from "./child1Inheritance";

const tickets: SupportTicket[] = [
    new TechnicalSupportTicket(101, "It will not accept payment.", "Medium"),
    new TechnicalSupportTicket(102, "The screen is frozen.", "High"),
    new BillingSupportTicket(103, "The account has been overcharged.", "Medium"),
    new BillingSupportTicket(104, "Waiting for a refund.", "Low")
]

tickets.forEach(ticket => {
    ticket.displayInfo()
});
