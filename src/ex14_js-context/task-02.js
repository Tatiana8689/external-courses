function Hangman(value) {
    this.value = value;

    this.arr = this.value.split('');
    this.answerArray = this.arr.map(item => "_");

    this.wrongLetterArray = [];
    this.errors = 6;
    this.remainingLetters = value.length;

    this.guess = (letter) => {
        while (this.errors > 0) {
            if (!this.value.includes(letter)) {
                this.errors--;
                this.wrongLetterArray.push(letter);
                console.log("wrong letter, errors left " + this.errors + " | " + this.wrongLetterArray);

                return this;
            }

            for (j = 0; j < this.value.length; j++) {
                if (letter === this.value[j]) {
                    this.answerArray[j] = letter;
                    this.remainingLetters--;
                }
            }
            if (this.remainingLetters === 0) {
                console.log(this.value + " | " + "You won!");

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

    this.getGuessedString = () => {
        console.log(this.answerArray.join(''));

        return this;
    };

    this.startAgain = (value) => {
        this.value = value;
        this.arr = this.value.split('');
        this.answerArray = this.arr.map(item => "_");
        this.remainingLetters = this.value.length;

        return this
    }
}

let hangman = new Hangman('webpurple');

module.exports = hangman;
