# ATM App Review

This review focuses on logic, correctness, and code structure so you can make the fixes yourself.

## Findings

1. `login()` calls `atmmMenu()` instead of `atmMenu()`.
   - This typo breaks the main flow after a successful login.
   - Check `script.js:14`.

2. The menu options do not match the functions being called.
   - Option `2` says `withdraw` but calls `depositMoney()`.
   - Option `3` says `Deposit` but calls `withdrawMoney()`.
   - This reverses the expected transaction behavior.
   - Check `script.js:27`, `script.js:42`, and `script.js:46`.

3. The balance display does not use the real balance variable.
   - `checkBalance()` shows `"Balance"` as text instead of the `balance` value.
   - Check `script.js:65`.

4. The PIN is declared twice.
   - You already have a global `pin`, but `login()` declares `correctPin` again.
   - Keep one source of truth for the PIN value.
   - Check `script.js:3` and `script.js:8`.

5. Input validation is incomplete.
   - `Number(prompt(...))` can produce `NaN` for text input.
   - `prompt()` can also return `null` when the user cancels.
   - Handle those cases deliberately.
   - Check `script.js:9`, `script.js:73`, and `script.js:89`.

6. The menu flow uses repeated self-calls.
   - `atmMenu()` calls itself after most actions.
   - A loop is a better structure for repeated menu navigation.
   - Check `script.js:59`, `script.js:67`, `script.js:84`, and `script.js:105`.

7. Some formatting and naming are inconsistent.
   - Menu labels should use consistent capitalization.
   - Currency output should use one consistent format.
   - Check `script.js:27`, `script.js:79`, and `script.js:102`.

8. There is an unused variable.
   - The global `pin` is declared but not used in the current implementation.
   - Check `script.js:3`.

9. The helper functions are tightly nested inside `atmMenu()`.
   - That works for a small exercise, but separating them can make the code easier to read and maintain.

10. Some user flows need more deliberate handling.
    - After a wrong PIN, the app stops immediately.
    - After invalid amount input, think carefully about what the next user action should be.

## Recommended Fix Order

1. Fix the broken function call after login.
2. Match each menu option to the correct transaction function.
3. Fix the balance display.
4. Remove duplicated PIN logic.
5. Improve validation for invalid or canceled input.
6. Refactor the menu flow to use a loop.

## Summary

The app has the main ATM features in place, but the current version has a few logic errors that prevent it from behaving correctly. Focus first on correctness, then clean up validation and structure.
