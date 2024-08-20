import random

def choose_word():
    # List of possible hangman words
    words = ["python", "development", "hangman", "programming", "algorithm", "function", "variable"]
    return random.choice(words)

def display_word(word, guessed_letters):
    # Display the word with dashes for unguessed letters
    return ''.join([letter if letter in guessed_letters else '-' for letter in word])

def get_guess(guessed_letters):
    while True:
        guess = input("Guess a letter: ").lower()
        try:
            if len(guess) != 1:
                raise ValueError("Please enter only one letter.")
            if not guess.isalpha():
                raise ValueError("Invalid input. Please enter a letter.")
            if guess in guessed_letters:
                raise ValueError("You have already guessed that letter.")
            return guess
        except ValueError as e:
            print(e)

def hangman():
    word = choose_word()
    guessed_letters = set()
    incorrect_guesses = 0
    max_attempts = 6

    print("Welcome to Hangman!")
    print(display_word(word, guessed_letters))

    while incorrect_guesses < max_attempts:
        guess = get_guess(guessed_letters)
        guessed_letters.add(guess)

        if guess in word:
            print(f"Good guess! The word so far: {display_word(word, guessed_letters)}")
        else:
            incorrect_guesses += 1
            print(f"Incorrect! You have {max_attempts - incorrect_guesses} attempts left.")

        if all(letter in guessed_letters for letter in word):
            print(f"Congratulations! You've guessed the word: {word}")
            break
    else:
        print(f"You've run out of attempts! The word was: {word}. You Lost!")

if __name__ == "__main__":
    hangman()
