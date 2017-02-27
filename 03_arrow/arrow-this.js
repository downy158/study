"use strict";

const normalObj = {
    func1: function(){
        console.log('normal func1 - this', this);
        let func2 = function(){
            console.log('normal func2 - this', this);
        }
        func2();
        setTimeout(func2, 1000);
    }
};

normalObj.func1();


const arrowObj = {
    func1: () => {
        console.log('arrow func1 - this', this);
        let func2 = function(){
            console.log('arrow func2 - this', this);
        }
        func2();
        setTimeout(func2, 1000);
    }
};

arrowObj.func1();