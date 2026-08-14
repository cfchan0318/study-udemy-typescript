// const dog = {
//     name: "asd",
//     breed:"dog"
// }

// function printName(person: {first: string, last: string}):void {
//     console.log(`${person.first} ${person.last}`)
// }

// printName({ first: "Tim", last: "Lo" })

// //{x:number, y:number}
// let coordinate: { x: number, y: number } = { x: 1, y: 2 }

// //return type
// function randomCoordinate(): { x: number, y: number } {
//     return {x: Math.random(),y:Math.random()}
// }

// ///error
// //printName({first:"Eren",last:"Kruger",age:99})

// //ok
// const singer = { first: "Eren", last: "Kruger", age: 99 }
// printName(singer)

//Type Alias
// type Point = {
//     x: number;
//     y: number;
// }

// let coordinate: { x: number; y: number } = { x: 1, y: 2 };

// //return type
// function doublePoint(point: Point): Point {
//     return { x: point.x*2, y: point.y *2 };
// }

// type myNum = number;
// let age: myNum = 123;


// const describePerson = (person: {
//     name: string;
//     age: number;
//     parentNames: {
//         mom: string;
//         dad: string;
//     }
// }) => {

// }

// //nested objects

// type Song = {
//     title: string,
//     artist: string,
//     numStreams: number,
//     credits: {
//         producer: string,
//         writer: string
//     }
// }

// function calculatePayout(song: Song): number {
//     return song.numStreams * 0.0033;
// }

// function printSong(song: Song):void {
//     console.log(`${song.title} - ${song.artist}`)
// }

// const mySong ={
//     title: "something",
//         artist: "muse",
//         numStreams: 123123,
//         credits: {
//         producer: "phil",
//             writer:"Alex,"
//         }
// }

// const earnings = calculatePayout(mySong);
// console.log(earnings);
// printSong(mySong)

//Optional properties
type Point = {
    x: number;
    y: number;
    z?: number;
}
const myPoint: Point = { x: 1, y: 3 };

type User = {
    readonly id: number;
    username: string;
}

const user: User = {
    id: 123123,
    username: "catman"
}

//user.id = 123123123;


//Intersection Type
type Circle = {
    radius: number;
}

type Colorful = {
    color: string;
}

type ColorfulCircle = Circle & Colorful;

const happyFace: ColorfulCircle = {
    radius: 4,
    color: "yellow"
}

type Cat = {
    numLives:number
}

type Dog = {
    breed:string
}

type CatDog = Cat & Dog & { age: number };