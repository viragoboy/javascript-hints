//////////////////////////////////////////////////////////
// Now let's accomplish the same thing using a class
//////////////////////////////////////////////////////////
class MyString {

  myVar = '';

  constructor(v) {
    // the class 'owns' the passed value 'v' and stores it in 'myVar'
    this.myVar = v;
  }

  render() {

    // this is the function on line 29 which is not part of the class
    addSuffix();

    // once inside the class, we use 'this' to refer to the class instance    
    this.addSuffix();
    console.log(this.myVar);
  }

  addSuffix() {
    this.myVar = this.myVar + ' hello';
  }
}

// this 'addSuffix' is different from the one in class MyString
function addSuffix() {
  console.log('you invoked addSuffix() in the global scope');
}

const array1 = [new MyString('value one'), new MyString('value two')];
for (const iterator of array1) {
  // there's no need to 'bind' here because we're invoking render() with a class instance
  // 'this' === 'iterator'
  iterator.render();
}
