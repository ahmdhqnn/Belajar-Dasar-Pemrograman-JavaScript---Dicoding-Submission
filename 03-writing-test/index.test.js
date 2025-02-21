import test from 'node:test';
import assert from 'node:assert';
import { sum } from './index.js';

test('fungsi sum() harus mengembalikan hasil penjumlahan dua angka', async (t) => {
  // Test case 1: Pengujian dengan angka positif
  assert.equal(sum(2, 3), 5);
  
  // Test case 2: Pengujian dengan angka negatif
  assert.equal(sum(-1, -2), -3);
  
  // Test case 3: Pengujian dengan nol
  assert.equal(sum(0, 5), 5);
});
