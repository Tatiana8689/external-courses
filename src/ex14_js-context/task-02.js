function Hangman(value) {
    this.value = value;

    let answerArray = [];
    for (i = 0; i < value.length; i++) {
        answerArray[i] = "_";
    }

    let wrongLetterArray = [];
    let errors = 6;
    let remainingLetters = value.length;

    this.guess = (letter) => {
        while (errors > 0) {
            if (!value.includes(letter)) {
                errors--;
                wrongLetterArray.push(letter);
                console.log("wrong letter, errors left " + errors + " | " + wrongLetterArray);

                return this;
            }

            for (j = 0; j < value.length; j++) {
                if (letter === value[j]) {
                    answerArray[j] = letter;
                    remainingLetters--;
                }
            }
            if (remainingLetters === 0) {
                console.log(value + " | " + "You won!");
                return this;
            }
            console.log(answerArray.join(''));
            return this;

        }

        console.log("You lose...");
        return this;
    }

    this.getStatus = () => {
        console.log(answerArray.join('') + " | " + "errors left " + errors);

        return this;
    }

    this.getWrongSymbols = () => {
        console.log(wrongLetterArray);

        return this;
    }

    this.getErrorsLeft = () => {
        console.log(errors);

        return this;
    }

    this.getGuessedString = (x) => {
        console.log(answerArray.join(''));

        return this;
    };

    this.startAgain = (value) => {
        return new Hangman(value)
    }
}

let hangman = new Hangman('webpurple');

module.exports = new Hangman;
