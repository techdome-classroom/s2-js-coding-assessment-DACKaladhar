/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function (s) {
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

};

module.exports = { isValid };


