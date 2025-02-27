import test from 'node:test';
import assert from 'node:assert';
import sum from './index.js';

test('fungsi sum() harus mengembalikan hasil yang benar', async (t) => {
  await t.test('mengembalikan jumlah untuk input positif', () => {
    assert.equal(sum(2, 3), 5);
    assert.equal(sum(10, 20), 30);
  });

  await t.test('mengembalikan 0 untuk input negatif', () => {
    assert.equal(sum(-1, 5), 0);
    assert.equal(sum(5, -1), 0);
    assert.equal(sum(-1, -2), 0);
  });

  await t.test('mengembalikan jumlah dengan input nol', () => {
    assert.equal(sum(0, 5), 5);
    assert.equal(sum(5, 0), 5);
    assert.equal(sum(0, 0), 0);
  });

  await t.test('mengembalikan 0 untuk input bukan number', () => {
    assert.equal(sum('2', 3), 0);
    assert.equal(sum(2, '3'), 0);
    assert.equal(sum(null, 5), 0);
    assert.equal(sum(undefined, 5), 0);
    assert.equal(sum({}, []), 0);
  });
});
