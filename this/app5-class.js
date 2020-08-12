//////////////////////////////////////////////////////////
// Now let's accomplish the same thing using a class
//////////////////////////////////////////////////////////
class Alpha {

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

// this 'addSuffix' is different from the one in class Alpha
function addSuffix() {
  console.log('you invoked the wrong function');
}

const array1 = [new Alpha('value one'), new Alpha('value two')];
for (const iterator of array1) {
  // there's no need to 'bind' here because we're invoking render() with a class instance
  // 'this' === 'iterator'
  iterator.render();
}
