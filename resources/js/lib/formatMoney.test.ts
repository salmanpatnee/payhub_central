import { describe, expect, it } from 'vite-plus/test';
import { formatMoney } from '@/lib/formatMoney';

describe('formatMoney', () => {
    it('groups thousands and shows 2 decimals with an uppercase code', () => {
        expect(formatMoney(125000000, 'pkr')).toEqual({
            code: 'PKR',
            amount: '1,250,000.00',
        });
    });

    it('uses 2 decimals for every currency, yen included', () => {
        expect(formatMoney(5000, 'jpy').amount).toBe('50.00');
    });

    it('still formats an unknown currency code', () => {
        expect(formatMoney(1500, 'zzz')).toEqual({
            code: 'ZZZ',
            amount: '15.00',
        });
    });

    it('shows a real zero as 0.00', () => {
        expect(formatMoney(0, 'usd').amount).toBe('0.00');
    });

    it('pads amounts under one unit', () => {
        expect(formatMoney(5, 'usd').amount).toBe('0.05');
        expect(formatMoney(99, 'usd').amount).toBe('0.99');
    });

    it('puts the minus sign in front of a negative amount', () => {
        expect(formatMoney(-150000, 'usd').amount).toBe('-1,500.00');
        expect(formatMoney(-5, 'usd').amount).toBe('-0.05');
    });

    it.each([
        ['a fraction', 12.5],
        ['a string', '1500'],
        ['null', null],
        ['undefined', undefined],
        ['NaN', Number.NaN],
        ['Infinity', Number.POSITIVE_INFINITY],
        ['an unsafe integer', Number.MAX_SAFE_INTEGER + 2],
    ])('shows a dash, never 0, for %s', (_label, value) => {
        expect(formatMoney(value, 'usd').amount).toBe('—');
    });
});
