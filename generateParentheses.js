/**
 * @param {number} n
 * @return {string[]}
 */
var generateParenthesis = function (n) {
    let resultado = [];

    function backtracking(str, open, close) {
        if (str.length === 2 * n) {
            resultado.push(str);
            return;
        }
        if (open < n) {
            backtracking(str + "(", open + 1, close);
        }
        if (close < open) {
            backtracking(str + ")", open, close + 1);
        }
    }
    backtracking("", 0, 0);
    return resultado;
}

console.log(generateParenthesis(3));