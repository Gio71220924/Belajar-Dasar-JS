import { strict as assert } from 'node:assert';
import test from 'node:test';
import sum from './index.js';


test('Pengujian fungsi sum di file index.js', t => {
    //Test dengan angka positif
    assert.equal(sum(1, 2), 3, 'sum(1, 2) hasil harus sama dengan 3');
    assert.equal(sum(5, 10), 15, 'sum(5, 10) hasil harus sama dengan 15');

    //Test dengan angka negatif
    assert.equal(sum(5, -3), 0, 'sum(5, -3) hasil harus sama dengan 0');
    assert.equal(sum(-2, 10), 0, 'sum(-2, 10) hasil harus sama dengan 0');
    assert.equal(sum(-5, -3), 0, 'sum(-5, -3) hasil harus sama dengan 0');

    //Test dengan String
    assert.equal(sum('a', 2), 0, 'sum("a", 2) hasil harus sama dengan 0');
    assert.equal(sum(2, 'b'), 0, 'sum(2, "b") hasil harus sama dengan 0');
    assert.equal(sum('a', 'b'), 0, 'sum("a", "b") hasil harus sama dengan 0');
    
    //Test dengan bilangan 0
    assert.equal(sum(0, 0), 0, 'sum(0, 0) hasil harus sama dengan 0');
    assert.equal(sum(0, 5), 5, 'sum(0, 5) hasil harus sama dengan 5');
    assert.equal(sum(5, 0), 5, 'sum(5, 0) hasil harus sama dengan 5');

    //Test dengan bilangan null
    assert.equal(sum(null, 5), 0, 'sum(null, 5) hasil harus sama dengan 0');
});