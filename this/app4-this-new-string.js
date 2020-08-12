//////////////////////////////////////////////////////////
// Now let's try using 'this'
//////////////////////////////////////////////////////////

function render() {
  // 'this' refers to 'iterator' because 'render' is a property of 'iterator' (see line 19)
  const newV = addSuffix(this);
  console.log(newV);
}

// Still need to pass 'v' here because we did not bind the value of 'this' to anything
function addSuffix(v) {
  return v = v + ' hello';
}

const array1 = [new String('value one'), new String('value two')];
for (const iterator of array1) {
  // add a property 'render' which points to the render() function above
  iterator.render = render;
  iterator.render();
}
