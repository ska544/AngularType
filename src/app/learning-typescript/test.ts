function giveMeTuple() {
    let random = Math.floor(Math.random() * 10) // 0-9
    //let students = ['harry', 'hermoine', 'ron', 'ginny', 'fred', 'george', 'luscious', 'patt', 'parvati', 'neville'];
    let students = ['praveen', 'emily', 'samarpita', 'luke', 'aot nick', 'nick 2', 'nelson', 'blair', 'kerry', 'max'];
    return [random, students[random]];
}

let theTuple = giveMeTuple();

let num = theTuple[0];
let theName = theTuple[1];

const [ randomNum, personName ] = theTuple;

console.log(randomNum, personName);