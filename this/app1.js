// With functions always need to pass values as parameters
function render(v) {
  const newV = addSuffix(v);
  console.log(newV);
}

// With functions always need to pass values as parameters
function addSuffix(v) {
  return v = v + ' hello';
}

const array1 = ['value one', 'value two'];
for (const iterator of array1) {
  // With functions always need to pass values as parameters
  render(iterator);
}
