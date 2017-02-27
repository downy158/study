"use strict";
debugger;

let sports = "축구";
try {
  let sports = "농구";
  console.log('try', sports);
  throw new Error('test');
} catch (e) {
  console.log('catch', sports);
};

console.log('global', sports);


let dummy;

