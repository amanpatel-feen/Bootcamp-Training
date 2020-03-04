console.log('hierarchy of person, employee and developers. ')
//  This is main class or constructor
function person(name){
    this.name = name;
}
var obj = new person("aman")
console.log(obj)

//  Employee is inheriting name from person
function employee(name,id){
    person.call(this,name)
    this.id = id;
}
var empObj = new employee("aman1", 3988)
console.log(empObj)
//  Developers is inheriting name and id from employee.
function developers(name,id,competency){
    employee.call(this,name,id) 
    this.competency = competency;
}
//  Creating object of developers
var obj1 = new developers('AMAN',3988,'FEEN');
console.log(obj1);







// call and bind
console.log("CALL AND BIND ")
console.log("CALL")
    var _call = function () { 
        console.log("hii", this.fname);
      };
      
      var aman = {fname: 'Aman'};
      _call.call(aman);
      
      
console.log("BIND")

    var person = {
        name:"Aman"
        };
      var greeting = function(a){
          return "Welcome "+this.name+" to "+a;
      };
      var _bind=greeting.bind(person);
      console.log(_bind("To The New"));
      

// Properties of argument objects

console.log("PROPERTIES OF ARGUMENT OBJECTS")

    function noOfArguments()
    {
        console.log("Number of arguments = " + arguments.length)
        for (var i = 0; i < arguments.length; i++)
        {
            console.log("Argument " + i + " = " + arguments[i]);
        }
    }

    noOfArguments();
    noOfArguments("Aman", "Patel");
    noOfArguments(1,2,3,4,5,6,7,8);




    var factorial = function(x) {
      if (x < 2) return 1;
      else return x * arguments.callee(x-1);
  }
  var y = factorial(5);  
  console.log(factorial(5));
  


    function f() {
        for (let letter of arguments) {
          console.log(letter);
        }
      }
      f('Aman', 'Deepali', 'Bharat', 'Prashant', 'Priya');
  

  console.log("COUNTER USING CLOSURE")
    // Counter using closure
    function counter() {
        var count =0;
        function subCount(){
            count += 1;  
            return count;      
        }
        return subCount;
    }
    
    var x = counter();
    x();
    x();
    x();
    console.log('Counter ' + x())


// 5 array methods

console.log("5 ARRAY METHODS")
// 1. sort()
var aray = [2,5,6,1,4,5,7];
console.log(aray.sort());

// 2. shift()
 aray.shift();
 console.log(aray);

//  3. unshift()

aray.unshift(99);
console.log(aray);

// 4. push()

aray.push(12);
console.log(aray);

//5. pop()

aray.pop();
console.log(aray);


// Print array element after 3 seconds
console.log("PRINT ARRAY ELEMENTS AFTER 3 SECONDS")
    var a=[1,2,3,4,5]
    var i=0;
    (function timeOut(){
      console.log(a[i])
      if (++i < a.length) {
            setTimeout(timeOut, 3000);
        }
    })();