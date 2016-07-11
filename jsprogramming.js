//#1
for (var i = 0; i <= 1000; i += 100) {
  console.log(i);
}

//#2
for (var i = 1; i <= 128; i *= 2) {
  console.log(i);
}

//#3
for (var i = 0; i <= 10; i += 2) {
  console.log(i);
}

//#4
for (var i = 3; i <= 15; i += 3) {
  console.log(i);
}

//#5
for (var i = 9; i >= 0; i--) {
  console.log(i);
}

//#6
for (var i = 0; i <= 12; i++) {
  if (i < 3) {
    console.log(1);
  }
  else if (i < 6) {
    console.log(2);
  }
  else if (i < 9) {
    console.log(3);
  }
  else {
    console.log(4);
  }
}

//#7
var count = 0;

while(count < 3) {
  for (var i = 0; i <=4; i++) {
    console.log(i);
  }
  count++;
}

//first bullet
for (var i = 0; i < 26; i++) {
  if (i % 2 === 0) {
    console.log(i + "even")
  } else {
    console.log(i + "odd")
  }
}

//second bullet
for (var i = 1; i <= 50; i++) {
  var whatevs = "";
  if (i % 3 === 0) {
    whatevs += "Fizz";
  }
  if (i % 5 === 0) {
    whatevs += "Buzz";
  }
  console.log(whatevs || i);
}

//third bullet
var multiples = 0;
for (var i = 0; i < 1000; i++) {
  if (!(i % 3) || !(i % 5)) {
    multiples += i;
  }
}
console.log(multiples);

//fourth bullet
var stack = "";

for (var i = 0; i < 7; i++) {
  stack += "#";
  console.log(stack);
}
