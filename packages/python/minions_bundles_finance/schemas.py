"""
Minions Bundle: Finance SDK — Type Schemas
Custom MinionType schemas for Minions Bundle: Finance.
"""

from minions.types import FieldDefinition, FieldValidation, MinionType

class Client(MinionType):
    """A person or company paying for services"""
    slug = "client"
    icon = "🏢"

    fields = [
        FieldDefinition(name="name", type="str", label="name"),
        FieldDefinition(name="billingEmail", type="str", label="billingEmail"),
        FieldDefinition(name="address", type="str", label="address"),
    ]


class Budget(MinionType):
    """Allocated funds for a specific period or project"""
    slug = "budget"
    icon = "🧮"

    fields = [
        FieldDefinition(name="name", type="str", label="name"),
        FieldDefinition(name="amount", type="float", label="amount"),
        FieldDefinition(name="currency", type="str", label="currency"),
        FieldDefinition(name="periodStart", type="str", label="periodStart"),
        FieldDefinition(name="periodEnd", type="str", label="periodEnd"),
    ]


class Expense(MinionType):
    """A record of money spent"""
    slug = "expense"
    icon = "💳"

    fields = [
        FieldDefinition(name="budgetId", type="str", label="budgetId"),
        FieldDefinition(name="amount", type="float", label="amount"),
        FieldDefinition(name="currency", type="str", label="currency"),
        FieldDefinition(name="date", type="str", label="date"),
        FieldDefinition(name="category", type="str", label="category"),
        FieldDefinition(name="receiptUrl", type="str", label="receiptUrl"),
    ]


class Invoice(MinionType):
    """A bill sent to a client"""
    slug = "invoice"
    icon = "🧾"

    fields = [
        FieldDefinition(name="clientId", type="str", label="clientId"),
        FieldDefinition(name="amount", type="float", label="amount"),
        FieldDefinition(name="currency", type="str", label="currency"),
        FieldDefinition(name="issueDate", type="str", label="issueDate"),
        FieldDefinition(name="dueDate", type="str", label="dueDate"),
        FieldDefinition(name="status", type="str", label="status"),
    ]


class PaymentRecord(MinionType):
    """A record of money received against an invoice"""
    slug = "paymentRecord"
    icon = "💸"

    fields = [
        FieldDefinition(name="invoiceId", type="str", label="invoiceId"),
        FieldDefinition(name="amount", type="float", label="amount"),
        FieldDefinition(name="date", type="str", label="date"),
        FieldDefinition(name="method", type="str", label="method"),
    ]


BUNDLE_TYPES = [Client, Budget, Expense, Invoice, PaymentRecord]
