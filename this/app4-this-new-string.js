//////////////////////////////////////////////////////////
// Now let's try using 'this' by using String objects
//////////////////////////////////////////////////////////

function render() {
  // 'this' refers to 'iterator' because 'render' is a property of 'iterator' (see line 23)
  const newV = addSuffix(this);
  console.log(newV);
}

// Still need to pass 'v' here because we did not bind the value of 'this' to anything
function addSuffix(v) {
  return v = v + ' hello';
}

// Note that these are String objects, not string literals 
const array1 = [new String('value one'), new String('value two')];
for (const iterator of array1) {
  // add a property 'render' which points to the render() function above
  iterator.render = render;

  // 'this' === 'iterator'
  iterator.render();
}
