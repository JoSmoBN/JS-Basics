//Once you complete a problem, open up Chrome and check the answer in the console.

var outer = function(){
  var name = 'Tyler';
  return function(){
    return 'The original name was ' + name;
  }
}
//Above you're given a function that returns another function which has a closure over the name variable.
//Invoke outer saving the return value into another variable called 'inner'.

  //Code Here

var inner = outer();

//Once you do that, invoke inner.

  //Code Here

inner();

//Next problem



var callFriend = function(){
  var friend = 'Jake';
  function callF(number){
    return 'Calling ' + friend + ' at ' + number;
  }
  return callF;
};

//Above you're given a callFriend function that returns another function.
//Do what you need to do in order to call your function and get 'Calling Jake at 435-215-9248' in your console.

  //Code Here

var callJake = callFriend();
callJake(4352159248);

//Next Problem



/*
  Write a function called makeCounter that makes the following code work properly.
*/
function makeCounter() {
    var counter = 0;
    counter++;

    function countContributer() {
        console.log(counter++);
    }
    return countContributer;
}


  //Code Here
  var count = makeCounter();
  count(); // 1
  count(); // 2
  count(); // 3
  count(); // 4



//Next Problem



/*
  Write a function named codeLove that returns the string 'I love code'. Write a
  second function named codeFriend that accepts the first function as it's first
  parameter. The second function should return a new third function. Store the
  third function in a variable, codeEcho which, when invoked, invokes the first,
  original function that was passed in, but will only ever do so once (returns
  null after first invocation).
*/

  //Code Here


function codeLove() {               //function that does exactly what it looks like it does.
    return "I love code";
}
    function codeFriend(func) {     //function that has one parameter.
        var ifFirst = true;         //variable with a true boolean.
        return function() {         //returning a nameless function.
            if (ifFirst) {          //if statement that changes variables boolean to false.
                ifFirst = false;
                return func();      //return argument, as a function to invoke.
            }
            return null;            //if already run once, will return false.
    }
}

var codeEcho = codeFriend(codeLove);
codeEcho();
codeEcho();
codeEcho();
codeEcho();

//Next Problem



/*
  Now, similar to the last problem, write a function called 'fnCounter' that
  accepts two parameters. The first parameter will be an anonymous function and
  the second parameter, 'N', will be a number. Now, in 'fnCounter', allow the
  anonymous funciton to be invoked 'N' number of times. After it's been invoked
  'N' number of times, return 'STOP'.
*/


function fnCounter( func, N ) {

    for (N; N > 0; N--) {
        func();
    }
            return "STOP";
}


fnCounter( function(){
    return "this is working"
}, 10);



//Next Problem




//   var counter = function(){
//     for (var i=1; i<=5; i++) {
//       setTimeout( function timer(){
//           console.log( i );
//       }, i*1000 );
//     }
//   };
//
//
//   Above you have a function named counter. Examine the function
//  (without running the code) then below write what you expect to happen when the
//  funciton is invoked. *Hint: setTimeout calls a function or evaluates an
//  expression after a specified number of milliseconds.
//
//     //Answer Here
//     5
//
//   Now, run the function in your console and note what happpens.
//
//   Was your answer right or wrong?
//
//     //Answer Here
//     6
//     6
//     6
//     6
//     6
//
//   Fix the counter function so that it works the way you expect it to work.
//   (logging 1 then 2 then 3, etc) (Note: No unit test for this one because of
//   the timeout)


    //Code Here


    function counter() {
        for (var i = 1; i <= 5; i++) {
            timer(i);
        }
        function timer(banana) {
            setTimeout(function timer() {
                console.log(banana);
            }, banana * 1000)
        }
    }

    counter();



//Next Problem





var funcArray = [];
for (var i = 0; i <= 3; i++) {
  (function(hat) {
    funcArray.push(function() {
      console.log(hat);
    });
  }) (i);
}



funcArray[0]();
funcArray[1]();
funcArray[2]();
funcArray[3]();
funcArray[4]();
funcArray[5]();

//*Hint: Don't let this fool you. Break down what's really happening here.
