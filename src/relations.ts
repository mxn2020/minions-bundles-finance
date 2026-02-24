/**
 * @module minions-bundles-finance/relations
 * Relation definitions for Minions Bundle: Finance.
 */

export const bundleRelations = [
  { from: 'expense', relation: 'deducted_from', to: 'budget' },
  { from: 'invoice', relation: 'billed_to', to: 'client' },
  { from: 'paymentRecord', relation: 'pays', to: 'invoice' },
];

