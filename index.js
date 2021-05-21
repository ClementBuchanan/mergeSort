

const mergeSoft = array => {
  if (array.length < 2) return array;
  const middle = math.floor(array.length / 2);

  const leftSide = array.slice(0, middle);
  const rightSide = array.slice(middle, array.length);

  console.log('split:', leftSide, rightSide);

  return merge(mergeSort(leftSide), mergeSort(rightSide));
}

const merge = (left, right) => {
  while (left.length && right.length) {
    if (left[0] <= right[0]) {
      result.push(right.shift());
    }
  }
  while (left.length) result.push(left.shift());
  console.log('result', result);
  return result;
}

console.log(mergeSort([8, 4, 23, 42, 15, 16]));