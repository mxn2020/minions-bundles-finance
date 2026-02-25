/**
 * @module minions-bundles-finance/bundle
 * MinionType definitions and imports for Minions Bundle: Finance.
 */

import type { MinionType } from 'minions-sdk';


// --- Inline Bundle Types ---

export const clientType: MinionType = {
  id: 'bundle-finance-client',
  name: 'Client',
  slug: 'client',
  description: 'A person or company paying for services',
  icon: '🏢',
  schema: [
    { name: 'name', type: 'string', label: 'name' },
    { name: 'billingEmail', type: 'string', label: 'billingEmail' },
    { name: 'address', type: 'string', label: 'address' },
  ],
};

export const budgetType: MinionType = {
  id: 'bundle-finance-budget',
  name: 'Budget',
  slug: 'budget',
  description: 'Allocated funds for a specific period or project',
  icon: '🧮',
  schema: [
    { name: 'name', type: 'string', label: 'name' },
    { name: 'amount', type: 'number', label: 'amount' },
    { name: 'currency', type: 'string', label: 'currency' },
    { name: 'periodStart', type: 'date', label: 'periodStart' },
    { name: 'periodEnd', type: 'date', label: 'periodEnd' },
  ],
};

export const expenseType: MinionType = {
  id: 'bundle-finance-expense',
  name: 'Expense',
  slug: 'expense',
  description: 'A record of money spent',
  icon: '💳',
  schema: [
    { name: 'budgetId', type: 'string', label: 'budgetId' },
    { name: 'amount', type: 'number', label: 'amount' },
    { name: 'currency', type: 'string', label: 'currency' },
    { name: 'date', type: 'date', label: 'date' },
    { name: 'category', type: 'select', label: 'category' },
    { name: 'receiptUrl', type: 'string', label: 'receiptUrl' },
  ],
};

export const invoiceType: MinionType = {
  id: 'bundle-finance-invoice',
  name: 'Invoice',
  slug: 'invoice',
  description: 'A bill sent to a client',
  icon: '🧾',
  schema: [
    { name: 'clientId', type: 'string', label: 'clientId' },
    { name: 'amount', type: 'number', label: 'amount' },
    { name: 'currency', type: 'string', label: 'currency' },
    { name: 'issueDate', type: 'date', label: 'issueDate' },
    { name: 'dueDate', type: 'date', label: 'dueDate' },
    { name: 'status', type: 'select', label: 'status' },
  ],
};

export const paymentRecordType: MinionType = {
  id: 'bundle-finance-paymentRecord',
  name: 'PaymentRecord',
  slug: 'paymentRecord',
  description: 'A record of money received against an invoice',
  icon: '💸',
  schema: [
    { name: 'invoiceId', type: 'string', label: 'invoiceId' },
    { name: 'amount', type: 'number', label: 'amount' },
    { name: 'date', type: 'date', label: 'date' },
    { name: 'method', type: 'select', label: 'method' },
  ],
};

// --- Bundle Export ---

export const bundleTypes: MinionType[] = [
  clientType,
  budgetType,
  expenseType,
  invoiceType,
  paymentRecordType,
];

