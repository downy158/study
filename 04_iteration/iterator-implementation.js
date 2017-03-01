'use strict';

let iteratorImpl = {
    array: [ 1, 2, 3, 4, 5 ],
    nextIndex: 0,
    next: function(){
        let hasNext = this.nextIndex < this.array.length;
        if (hasNext) {
            return { done: false, value: this.array[this.nextIndex++] };
        } else {
            return { done: true, value: undefined };
        }
    }
};

console.log(iteratorImpl.next());
console.log(iteratorImpl.next());
console.log(iteratorImpl.next());
console.log(iteratorImpl.next());
console.log(iteratorImpl.next());
console.log(iteratorImpl.next());

// TODO iteratorImpl.next 메서드를 arrow 함수로 변형하기
