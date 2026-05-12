/**
 * @param {string[]} strs
 * @return {string}
 */
let longestCommonPrefix = function (strs) {
    let output = "";
    for (let i = 0; i < strs[0].length; i++) {
        for (let j = 1; j < strs.length; j++) {
            if (strs[j][i] !== strs[0][i]) {
                return output;
            }
        }
        output += strs[0][i];
    }
    return output;
};

console.log(longestCommonPrefix(["flower", "flow", "flight"]));