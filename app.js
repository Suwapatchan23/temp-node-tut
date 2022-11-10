//  npm -   global command, comes with nodes
//  npm --version

// local dependency -   use it only in this particular project
// npm  i   <packagename>

// global dependency - use it in any project
//  npm install -g <packagename>

//  package.json - manifest file (stores importance info about project/package) 
// manual approach (create package.json in the root, create peoperties etc)
//  npm init (step by step, press enter to skip)
//  npm init -y (everything default)


const _ = require('lodash');

const items = [1, [2,[3,[4]]]]
const newItems = _.flattenDeep(items);
console.log(newItems)
