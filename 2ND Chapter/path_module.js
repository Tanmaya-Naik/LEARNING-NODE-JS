const path = require('path');

console.log(path.parse(__filename))

// console.log(__dirname);
// console.log(__filename);

//JOIN
const profilePath=path.join(__dirname, "uploads");
console.log(profilePath);

