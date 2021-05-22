'use strict';
const mergeSort = require('../index.js');
const merge = require('../index.js');

describe('should test merge arrays', () => {
  it('should test merge sort function', () => {
    let mergeSortArr = [8, 4, 23, 16, 42, 15];
    const mergedArray = mergeSort(mergeSortArr);
    expect(mergedArray).toEqual([4, 8, 15, 16, 23, 42]);
    console.log(mergedArray);
  });
});