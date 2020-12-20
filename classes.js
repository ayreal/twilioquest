class Materializer {
  constructor(targetName) {
    // your code here
    this.target = targetName;
    this.activated = false;
  }

  // your code here
  activate() {
    this.activated = true;
  }

  //   an instance function called materialize that returns the value of an instance's target property if the activated property is set to true. Otherwise, it returns undefined (nothing is returned).
  materialize() {
    const { activated, target } = this;
    if (activated) return target;
  }
}

// The following lines of code are not required for the solution, but can be
// used by you to test your solution.
const m = new Materializer('Kevin');
console.log(m.activated); // would print "false"

m.activate();
console.log(m.activated); // would print "true"

console.log(m.materialize()); // would print "Kevin"
