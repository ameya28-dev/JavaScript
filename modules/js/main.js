// import playguitar from "./guitar.js";
// import { shredding as shred, plucking as pluck } from "./guitar.js";

import * as Guitar from './guitar.js';
import User from './user.js';

console.log(Guitar.default());
console.log(Guitar.shredding());
console.log(Guitar.plucking());
const user1 = new User("ykjb@jbl.","Ameya");
console.log(user1);
console.log(user1.greeting());

import { posts } from './posts.js';

posts.forEach(post => {
    console.log(post);
});

let filteredPosts = posts.filter((post) => post.userId == 10);
console.log(filteredPosts);

let mappedPosts = filteredPosts.map((post) => post.id * 10);
console.log(mappedPosts);

let reducedPost = mappedPosts.reduce((sum, post) => sum+post);
console.log(reducedPost);