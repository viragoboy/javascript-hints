//////////////////////////////////////////////////////////
// Now let's try using 'this' without binding
//////////////////////////////////////////////////////////

function render() {
  // 'this' refers to 'obj' because 'render' is a property of 'obj' (see line 22)
  const newV = addSuffix(this.iterator);
  console.log(newV);
}

// Still need to pass 'v' here because we did not bind the value of 'this' to anything
function addSuffix(v) {
  return v = v + ' hello';
}

const array1 = ['value one', 'value two'];
for (const iterator of array1) {
  // This is the same as   const obj = { iterator: iterator, render: render }
  const obj = { iterator, render }

  // 'this' === 'obj'
  obj.render();
}
