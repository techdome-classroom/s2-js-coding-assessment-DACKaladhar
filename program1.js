/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
  class Solution {
    isValid(s) {
        const stack = [];
        const openBrackets = '([{';
        const closeBrackets = ')]}';
        const matchingBrackets = {
            ')': '(',
            ']': '[',
            '}': '{'
        };

        for (const e of s) {
            if (openBrackets.includes(e)) {
                stack.push(e);
            } else if (closeBrackets.includes(e)) {
                if (stack.length === 0) {
                    return false;
                } else if (stack[stack.length - 1] !== matchingBrackets[e]) {
                    return false;
                } else {
                    stack.pop();
                }
            }
        }

        return stack.length === 0;
    }
}

// Example usage
const solution = new Solution();
const input = "{[()]}"; // Change this value to test different inputs
const result = solution.isValid(input);
console.log(`The string '${input}' is ${result ? 'valid' : 'invalid'}.`);

};

module.exports = { isValid };


