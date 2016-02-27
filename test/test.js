const assert = require('assert');
import { map,
         difference,
         pluck,
         findLastIndex,
         keys } from '../';

describe('Underline', () => {

  describe('#map', () => {
    it('should return mapped values', () => {
      assert.deepEqual([1, 2, 3]::map(x => x + 1), [2, 3, 4]);
    });
  });

  describe('#difference', () => {
    it('should return difference of two arrays', () => {
      assert.deepEqual([1, 2, 3]::difference([1, 3]), [2]);
    });
  });

  describe('#pluck', () => {
    it('should extract list of property values', () => {
      const stooges = [
        {name: 'moe', age: 40},
        {name: 'larry', age: 50},
        {name: 'curly', age: 60}
      ];
      assert.deepEqual(stooges::pluck('name'), ['moe', 'larry', 'curly']);
    });
  });

  describe('#pluck', () => {
    it('should extract list of property values', () => {
      const stooges = [
        {name: 'moe', age: 40},
        {name: 'larry', age: 50},
        {name: 'curly', age: 60}
      ];
      assert.deepEqual(stooges::pluck('name'), ['moe', 'larry', 'curly']);
    });
  });

  describe('#findLastIndex', () => {
    it('should return last index of object in array', () => {
      const users = [
        {'id': 1, 'name': 'Bob', 'last': 'Brown'},
        {'id': 2, 'name': 'Ted', 'last': 'White'},
        {'id': 3, 'name': 'Frank', 'last': 'James'},
        {'id': 4, 'name': 'Ted', 'last': 'Jones'}
      ];
      assert.equal(users::findLastIndex({name: 'Ted'}), 3);
    });
  });

  describe('#keys', () => {
    it('should extract keys in object', () => {
      const obj = {
        a: 1,
        b: 2
      };
      assert.deepEqual(obj::keys(), ["a", "b"]);
    });
  });

});
