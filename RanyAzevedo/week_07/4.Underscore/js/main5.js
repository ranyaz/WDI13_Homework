var people = [
  { id: 1, username: "A", active: true,  age: 20, uid: 1412 },
  { id: 2, username: "B", active: false, age: 35, uid: 1352 },
  { id: 3, username: "C", active: false, age: 50, uid: 5418 },
  { id: 4, username: "D", active: true,  age: 65, uid: 216  },
  { id: 5, username: "E", active: true,  age: 80, uid: 18   },
  { id: 6, username: "E", active: true,  age: 95, uid: 1000 }
];

// Log out 30 random numbers between 20 and 100
var createArray = _.range(20,100);
var randomNumbers = _.sample(createArray, 30);
console.log(randomNumbers);

// Create a function that can only ever be called once

var login = function(){
  console.log("Bem Vindo");
};

var initialize = _.once(login);
initialize();


// Append a paragraph tag to the body for every person in people. It should end
// up looking something like this - <p> Hello A, you don't look a day over 20 </p>


people = _.map(people, function(person){
  var name =  person.username;
  var age = person.age;

    var addParagraph = document.createElement("p");
    var text = document.createTextNode( "Hello " + name + " you don't look a day over " + age);
     addParagraph.appendChild(text);
     document.body.appendChild(addParagraph);

return people;

});
