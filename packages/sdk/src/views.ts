/**
 * @module minions-bundles-finance/views
 * Named query filters for Minions Bundle: Finance.
 */

export const bundleViews = {
  unpaidInvoices: {
    description: 'Invoices that are issued but not fully paid',
    type: 'invoice',
    filter: {
      "status": "=== 'issued'"
},
  },
};

