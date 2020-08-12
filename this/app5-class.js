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
    // once inside the class, we use 'this' to refer to the class instance    
    this.addSuffix();
    console.log(this.myVar);
  }

  addSuffix() {
    this.myVar = this.myVar + ' hello';
  }
}

const array1 = [new MyString('value one'), new MyString('value two')];
for (const iterator of array1) {
  // there's no need to 'bind' here because we're invoking render() with a class instance
  // 'this' === 'iterator'
  iterator.render();
}
