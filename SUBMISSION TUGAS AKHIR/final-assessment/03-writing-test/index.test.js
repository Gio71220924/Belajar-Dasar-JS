import { sum } from './index.js';
import assert from 'node:assert';
import test from 'node:test'

test ("Uji test fungsi sum dari index.js", () => {
    assert.strictEqual(sum(1, 2), 3, "1 + 2 hasilnya jadi 3");
    assert.strictEqual(sum(-6, -3), -9, "-6 + -3 hasilnya jadi -9");
    assert.strictEqual(sum(1, -3), -2, "-1 + -3 hasilnya jadi -2");
    assert.strictEqual(sum(0, 0), 0, "0 + 0 hasilnya jadi 0");
    assert.strictEqual(sum(0, 7), 7, "0 + 7 hasilnya jadi 7");
    assert.strictEqual(sum(0, -7), -7, "0 + -7 hasilnya jadi -7");
    assert.strictEqual(sum("7", 2), "72", " '7' + 2 hasilnya jadi 72");
    assert.strictEqual(sum(7, "2"), "72", " 7 + '2' hasilnya jadi 72");
    assert.strictEqual(sum("7", "2"), "72", " '7' + '2' hasilnya jadi 72");
});