class Adder {
    // Remember that props = {a:4, b:8} from line 3 of index.js
    // So you don't have to have lines 6 and 7, a and b are already there.
    constructor(props) {
        this.props = props;
        // This overwrites the value in this.props.a
       // this.props.a = a; // a is undefined. 
        //this.props.b = b; // b is undefined
    }
    // Assignment not allowed in class scope (e.g. don't use = outside of a method)
 // x = sum(props); // sum is undefined

  // Create a method "sum" here like newMethod below.
  // No need for a parameter here, as props isn't used in the method body.
  // You can get the value of this.props from any method in the class.
    sum() {
      // Still need to add the two properties together here.

      return this.props.a + this.props.b;
    }
  // Just returns 0.
  newMethod() {
    `<p>The sum of ${this.props.a} and ${this.props.b} is </p>`
    return 0;
  }

  render(){
    return `<p>The sum of  ${this.props.a} and ${this.props.b} is ${this.sum()} </p>`  ;
  }
}

module.exports = Adder;