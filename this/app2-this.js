//////////////////////////////////////////////////////////
// Now let's try using 'this'
//////////////////////////////////////////////////////////

function render() {
  const newV = addSuffix(this);
  console.log(newV);
}

// Still need to pass 'v' here because we did not bind the value of 'this' to anything
function addSuffix(v) {
  return v = v + ' hello';
}

const array1 = ['value one', 'value two'];
for (const iterator of array1) {
  // bind 'iterator' to the value of 'this' inside of render()
  const f = render.bind(iterator);
  f();
}
