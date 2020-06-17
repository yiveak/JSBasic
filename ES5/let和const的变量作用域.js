let movie = 'Lord of the Rings';
// var movie = 'Batman v Superman'; //SyntaxError: Identifier 'movie' has already been declared

function starWarsFan() {
    const movie = 'Star wars';
    return movie;
}

function marvelFan() {
    movie = 'The Avengers';
    return movie;
}

function blizzardFan() {
    const isFan = true;
    let phrase = 'Warcraft';
    console.log('Before if: ' + phrase);
    if (isFan) {
        let phrase = 'initial text';
        phrase = 'For the Horde!';
        console.log('Inside if: ' + phrase);
    }
    phrase = 'For the Alliance';
    console.log('After if: ' + phrase);
}

//注意：变量的当前作用域
console.log(movie); // 'Lord of the Rings'
console.log(starWarsFan()); // 'Star wars' 
console.log(marvelFan()); // 'The Avengers'
console.log(movie); // 隐式全局变量 'The Avengers'
blizzardFan();
/* 
'Before if: Warcraft'
'Inside if: For the Horde!'
'After if: For the Alliance'
*/