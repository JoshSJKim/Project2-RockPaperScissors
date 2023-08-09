# Project2-RockPaperScissors

- Basic JS program to play rock paper scissors.
- It's still a challenge to plan out the program with pseudocoding.
- Still having trouble 'seeing the big picture'.

## What I learned

- The `continue` statement.
  - Used within loop constructs (while, for, do...while, etc.) to immediately skip the remaining code within the current iteration of the loop and move on to the next iteration.
  - I used this in the program to validate the user input.

```JS
if (playerSelection !== 'rock' && playerSelection !== 'paper' && playerSelection !== 'scissors') {
  alert("Input is invalid. Please check your spelling.");
  continue; // stop current iteration if the 'if' statement triggers the alert and move on to the next iteration.
}
```

- Since the `gameCount++` portion of the code hasn't been run yet, it 'resets' the current iteration in a manner of speaking.

Visit the 'Rock Paper Scissors' project page<a href="https://joshsjkim.github.io/Project2-RockPaperScissors/" target="_blank"> here</a>.

- So it turns out, I am not able to figure out how to get the link to open in a new tab in markdown files.
- It is good to know and remember that I could use simple `HTML` syntax inside of markdown files.
