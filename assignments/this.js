/* The for principles of "this";
* in your own words. explain the four principle for the "this" keyword below.
*
* 1. Window(Global) Binding: If you are console logging "this" inside of a function that is *not* inside
of an object, then you are having "this" refer back to the global object, which is the window. This is 
because the "this" does not have an object to refer, and Window Binding is used ONLY in very fringe cases.
* 2. Implicit Binding: When you reference "this" inside of an object, the "this" refers to that object
in which it is being referenced. You can know what "this" is referring to in code when you use a method inside
that same object and look to the left of the ".", that is what the "this" is referencing.
* 3. New Binding: When we create a constructor function, we can use the "new" keyword to create a 
new object with the same properties as our parent constructor function. The "this" keyword inside 
the constructor function will refer to that new object that was created.
* 4. Explicit Binding: We can use object methods such as ".call", ".apply" and ".bind" to tweak the "this"
keyword to be explicitly defined to the new object. For example, in my code I have "mack.speak.call(sean)",
and when I call "sean", his variable will take over my variable, and the code will run as if I input
sean.speak();!
*
* write out a code example of each explanation above
*/

// Principle 1

// code example for Window Binding
function sayName(name) {
    console.log(this);
    return name;
} 
//sayName("Mack");
// Principle 2

// code example for Implicit Binding
const myObj = {
    phrase: `'I love Lambda School!'`,
    sayPhrase: function(name) {
        console.log(`${name} says ${this.phrase}`);
        console.log(this);
    },
}
myObj.sayPhrase('Mack');
// Principle 3

// code example for New Binding
function NewFriend(person, friend) {
    this.greet = 'Hello';
    this.person = person;
    this.friend = friend;
    this.exclamation = '!';
    this.speak = function(){
        console.log(this.person + " " + "says" + " " + `${this.greet} ${this.friend}${this.exclamation}`);
        console.log(this);
    };
};
const mack = new NewFriend('Mack', 'Miles');
const miles = new NewFriend('Miles', 'Mack');
mack.speak();
miles.speak()

// Principle 4

// code example for Explicit Binding
const sean = new NewFriend("Sean", "Jason")
mack.speak.call(sean);
