function Hangman(value) {
    this.value = value;

    this.arr = this.value.split('');
    this.answerArray = this.arr.map(item => "_");

    this.wrongLetterArray = [];
    this.wrongSimbolArray = [];
    this.errors = 6;
    this.remainingLetters = value.length;

    this.guess = (letter) => {
        while (this.errors > 0) {
            if (!this.value.includes(letter)) {
                if (!this.wrongSimbolArray.includes(letter)) {
                    this.wrongSimbolArray.push(letter);
                }
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
        return this.answerArray.join('') + " | " + "errors left " + this.errors;
    }

    this.getWrongSymbols = () => {
        return this.wrongSimbolArray;
    }

    this.getErrorsLeft = () => {
        return this.errors;
    }

    this.getGuessedString = () => {
        return this.answerArray.join('');
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
