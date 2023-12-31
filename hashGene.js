const crypto = require("crypto");
// const hexToBinary = require("hex-to-binary");

const cryptoHash = (...inputs) => {
    const hash = crypto.createHash("sha256");
    hash.update(inputs.sort().join(""));
    return hash.digest("hex");
};

//result = cryptoHash("world","hello");

//console.log(result);

module.exports = cryptoHash;