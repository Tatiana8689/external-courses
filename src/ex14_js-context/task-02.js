function Hangman(value) {
    this.value = value;

    this.answerArray = [];
    for (i = 0; i < value.length; i++) {
        this.answerArray[i] = "_";
    }

    this.wrongLetterArray = [];
    this.errors = 6;
    this.remainingLetters = value.length;

    this.guess = (letter) => {
        while (this.errors > 0) {
            if (!value.includes(letter)) {
                this.errors--;
                this.wrongLetterArray.push(letter);
                console.log("wrong letter, errors left " + this.errors + " | " + this.wrongLetterArray);

                return this;
            }

            for (j = 0; j < value.length; j++) {
                if (letter === value[j]) {
                    this.answerArray[j] = letter;
                    this.remainingLetters--;
                }
            }
            if (this.remainingLetters === 0) {
                console.log(value + " | " + "You won!");
                return this;
            }
            console.log(this.answerArray.join(''));
            return this;

        }

        console.log("You lose...");
        return this;
    }

    this.getStatus = () => {
        console.log(this.answerArray.join('') + " | " + "errors left " + this.errors);

        return this;
    }

    this.getWrongSymbols = () => {
        console.log(this.wrongLetterArray);

        return this;
    }

    this.getErrorsLeft = () => {
        console.log(this.errors);

        return this;
    }

    this.getGuessedString = (x) => {
        console.log(this.answerArray.join(''));

        return this;
    };

    this.startAgain = (value) => {
        return new Hangman(value)
    }
}

let hangman = new Hangman('webpurple');

module.exports = new Hangman;
