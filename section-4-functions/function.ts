//implicit Any
// function square(num) {
//     num.toUpperCase();
//     return num * num;
// }

// square(3)
// square(true)

// function square(num: number) {
//     return num ** 2;
// }

// square(true)
function greet(person: string) {
    return `Hello, ${person}`;
}

//greet(true)

const doSomething = (person: string, age: number, isFunny: boolean) => {


};
//doSomething("chickenFace", 76, true, 123); -> error
doSomething("chickenFace", 76, true)


//default params
function greetDefault(person: string ="stranger") {
    return `Hello, ${person}`;
}

greetDefault();
greetDefault("asdasd")

function square(num: number):number {
    return num ** 2;
}

//returning more than one type
function rand(num: number) { 
    if (Math.random() < 0.5) { 
        return num.toString()
    }
    return num;
}

const add = (x: number, y: number): number => { 
    return x + y;
}

const colors = ["red", "green", "blue"];
colors.map(color => { 
    //return color.toFixed();
    return color.toUpperCase();
})

function printTwice(msg: string):void { 
    console.log(msg);
    console.log(msg)
}

//Never
function makeError(msg: string):never { 
    //Error
    //return ""

    
    throw new Error(msg)

}