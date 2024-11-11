/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
  class Solution(object):
  def isValid(self, s):
      stack = []
      for e in s:
          if e in '[{(':
              stack.append(e)
          else:
              if not stack:
                  return False
              elif (e == ')' and stack[-1] != '(') or (e == ']' and stack[-1] != '[') or (e == '}' and stack[-1] != '{'):
                  return False
              else:
                  stack.pop()
      
      if stack:
          return False
      return True
};

module.exports = { isValid };


