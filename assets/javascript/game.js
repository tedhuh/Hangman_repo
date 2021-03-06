{
    var words = ["single", "home run", "triple play", "pitcher"]
    var wins = 0;
    var loss = 0;
    var wrongLetter = [];
    var guessesLeft = 9;
    var underScores = [];
    var userGuess;
    var lettersGuessed = [];
    var randomWord;
    var winCounter;
    var lossCounter;

    // this is in order to start the game. 
    function startGame() {
        //generate a random word from the array using math.random
        randomWord = words[Math.floor(Math.random() * words.length)];
        console.log(randomWord)

        //in order to create the underscore. once the random word is selected we need to know how many underscores to create depending on the word length
        for (i = 0; i < randomWord.length; i++) {
            underScores.push("_");
        }
        document.getElementById("word-blanks").textContent = underScores.join(" ");

        guessesLeft = 9;
        document.getElementById("guessesLeft").textContent = guessesLeft;


    }


    //now i need to link up the userGuess with the appropriate key to alter the HTML DOM
    document.onkeyup = function (event) {
        userGuess = event.key;
        if (randomWord.indexOf(userGuess) > -1) {
            for (var i = 0; i < randomWord.length; i++) {
                if (randomWord[i] === userGuess) {
                    underScores[i] = userGuess;
                    console.log(underScores);
                    console.log('Correct!')
                    document.getElementById('word').textContent = underScores;
                    winCounter++;
                    lossCounter++;
                    win();
                }
            }
        }
        else {
            wrongLetter.push(userGuess);
            guessesLeft--;
            console.log(wrongLetter);
            console.log('Incorrect!')
            document.getElementById('word').textContent = underScores;



            //restart button
            document.getElementById("restart-button").onclick
        };
    }
}
// this is to make the win counter add 1 whenever the user guess equals the random word!
function win() {
    if (winCounter === randomWord.length, lossCounter === randomWord.length)
        document.getElementById('wins').textContent = wins;
    document.getElementById('loss').textContent = loss;


}


startGame();       
