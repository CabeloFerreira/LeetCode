/**
 * @param {string} s
 * @return {boolean}
 */
let isValid = function (s) {
    let chaves = {
        "(": 1,
        ")": -1,
        "[": 10,
        "]": -10,
        "{": 100,
        "}": -100
    };
    let sum = 0;
    for (let i = 0; i < s.length; i++) {
        sum += chaves[s[i]];
    }
    if (sum !== 0) return false;
    let pilha = [];
    for (let i = 0; i < s.length; i++) {
        if (s[i] === "(" || s[i] === "[" || s[i] === "{") {
            pilha.push(s[i]);
        } else if (s[i] === ")") {
            if (pilha[pilha.length - 1] === "(") {
                pilha.pop();
            } else {
                return false;
            }
        } else if (s[i] === "]") {
            if (pilha[pilha.length - 1] === "[") {
                pilha.pop();
            } else {
                return false;
            }
        } else if (s[i] === "}") {
            if (pilha[pilha.length - 1] === "{") {
                pilha.pop();
            } else {
                return false;
            }
        }
        console.log(pilha);
    }
    return pilha.length === 0;
};

console.log(isValid("[]"));