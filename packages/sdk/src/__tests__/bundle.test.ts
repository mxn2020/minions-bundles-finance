import { describe, it, expect } from 'vitest';
import { bundleTypes } from '../bundle.js';
import { VERSION } from '../index.js';

describe('Bundle SDK', () => {
    it('should export a version string', () => {
        expect(VERSION).toBeDefined();
        expect(typeof VERSION).toBe('string');
    });

    it('should have bundleTypes array populated', () => {
        expect(bundleTypes).toBeDefined();
        expect(Array.isArray(bundleTypes)).toBe(true);
        expect(bundleTypes.length).toBeGreaterThan(0);
    });

    it('should define the clientType schema correctly', () => {
        const type = bundleTypes.find(t => t.slug === 'client');
        expect(type).toBeDefined();
        expect(type?.name).toBe('Client');
        expect(type?.schema.length).toBe(3);

        const fieldNames = type?.schema.map(f => f.name);
        expect(fieldNames).toContain('name');
        expect(fieldNames).toContain('billingEmail');
        expect(fieldNames).toContain('address');
    });

    it('should define the budgetType schema correctly', () => {
        const type = bundleTypes.find(t => t.slug === 'budget');
        expect(type).toBeDefined();
        expect(type?.name).toBe('Budget');
        expect(type?.schema.length).toBe(5);

        const fieldNames = type?.schema.map(f => f.name);
        expect(fieldNames).toContain('name');
        expect(fieldNames).toContain('amount');
        expect(fieldNames).toContain('currency');
        expect(fieldNames).toContain('periodStart');
        expect(fieldNames).toContain('periodEnd');
    });

    it('should define the expenseType schema correctly', () => {
        const type = bundleTypes.find(t => t.slug === 'expense');
        expect(type).toBeDefined();
        expect(type?.name).toBe('Expense');
        expect(type?.schema.length).toBe(6);

        const fieldNames = type?.schema.map(f => f.name);
        expect(fieldNames).toContain('budgetId');
        expect(fieldNames).toContain('amount');
        expect(fieldNames).toContain('currency');
        expect(fieldNames).toContain('date');
        expect(fieldNames).toContain('category');
        expect(fieldNames).toContain('receiptUrl');
    });

    it('should define the invoiceType schema correctly', () => {
        const type = bundleTypes.find(t => t.slug === 'invoice');
        expect(type).toBeDefined();
        expect(type?.name).toBe('Invoice');
        expect(type?.schema.length).toBe(6);

        const fieldNames = type?.schema.map(f => f.name);
        expect(fieldNames).toContain('clientId');
        expect(fieldNames).toContain('amount');
        expect(fieldNames).toContain('currency');
        expect(fieldNames).toContain('issueDate');
        expect(fieldNames).toContain('dueDate');
        expect(fieldNames).toContain('status');
    });

    it('should define the paymentRecordType schema correctly', () => {
        const type = bundleTypes.find(t => t.slug === 'paymentRecord');
        expect(type).toBeDefined();
        expect(type?.name).toBe('PaymentRecord');
        expect(type?.schema.length).toBe(4);

        const fieldNames = type?.schema.map(f => f.name);
        expect(fieldNames).toContain('invoiceId');
        expect(fieldNames).toContain('amount');
        expect(fieldNames).toContain('date');
        expect(fieldNames).toContain('method');
    });
});
