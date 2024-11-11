/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function (s) {
  conversions = {
    'I': 1,
    'V': 5,
    'X': 10,
    'L': 50,
    'C': 100,
    'D': 500,
    'M': 1000
  };

  let total = 0;
  let prevValue = 0;

  // Loop through the characters in reverse
  for (let i = s.length - 1; i >= 0; i--) {
    const char = s[i];
    const value = this.conversions[char];

    if (value < prevValue) { // Must subtract in these cases ex 
      total -= value;
    } else { // We can add
      total += value;
    }
    prevValue = value;
  }

  return total;
};


module.exports = { romanToInt }