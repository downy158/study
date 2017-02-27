"use strict";
debugger;

let get = () => 123;
get();

// arrow function은 prototype이 없으므로 new 호출이 불가능함
console.log(`get.prototype ${get.prototype}`);

function foo() {
    return 123;
}
foo();

// 일반 함수는 prototype과 constructor가 존재하므로 new로 호출이 가능함
console.log(`foo.prototype ${Object.getOwnPropertyNames(foo.prototype)}`);

let dummy;
