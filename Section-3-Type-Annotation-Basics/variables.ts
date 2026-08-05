let movieTitle: string = "Spiderman";
movieTitle = "Dune";

// cannot assign a number to a string
//movieTitle = 9;

//ts also tells you a function thats not available
//movieTitle.upper()
movieTitle.toUpperCase()


let numCatLives: number = 9;
numCatLives += 1;
//numCatLives = "zero";

let gameOver: boolean = false;
gameOver = true;
//gameOver = "true";

//Type Inference 
let tvShow = "Breaking Bad";
tvShow = "Better call saul";
//Error
//tvShow = false;

let isFunny = false;
isFunny = true;
//Error
//isFunny = "asd"


//Any type
let thing: any = "hello"
thing = 123;
thing = false;
thing()
thing.toUpperCase();

//normally
// let thing = "hello";
// thing()
// thing.asdasd();


//
const movies = ["Dune", "spiderman"]
//Any Type atp
//let foundMovie;
let foundMovie: string;

for (let movie in movies) { 
    if (movie === "Dune") { 
        //updated to String
        foundMovie = "Dune";
    }
}

//so now it doesnt do
//foundMovie = 1;
//foundMovie();
