'use strict';

let iterableImpl = {
    array: [ 1, 2, 3, 4, 5 ],
    nextIndex: 0,
    [Symbol.iterator]: function(){
        return {
            array: this.array,
            nextIndex: this.nextIndex,
            next: function(){
                let hasNext = this.nextIndex < this.array.length;
                if (hasNext) {
                    return { done: false, value: this.array[this.nextIndex++] };
                } else {
                    return { done: true, value: undefined };
                }
            }
        };
    }
};

let iterator = iterableImpl[Symbol.iterator]();

console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());

// TODO iterableImpl.next 메서드를 arrow 함수로 변형하기