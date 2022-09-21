function solution(a) {
    return a.reduce((acc, cur, i) => acc + cur * 256 ** i);
}

module.exports = solution;

// npm init -y
// npm i jest-cli -g
// package.json: "scripts": { "test": "jest" }
// npm test arrayPacking

// alternative solution
