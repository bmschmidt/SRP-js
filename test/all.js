SRP = require('../SRP.js')


// There aren't good tests here: just making sure it runs at all.

// Todo: import the tests from the python module.

hasher = SRP(8);

console.log(hasher.SRP(["foo"], [1], log=false));
console.log(hasher.SRP("foo", [1], log=false));

var foo = hasher.SRP("foo")
var FOO = hasher.SRP("FOO")


if (arrayEquality(foo, FOO) == false) {
  console.error("Case sensitivity broken")
}

console.log(hasher.tokenize("foo bar"))





// Needed functions


function arrayEquality(foo, FOO) {
  for (i = 0; i < foo.length; i++) {
    if (foo[i] != FOO[i]) {
      return false
    }
  }
  return true
}
