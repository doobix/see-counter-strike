const assert = require('assert');
const SeeCounterStrike = require('./index');
const scs = new SeeCounterStrike();

const randomWeapon = scs.getRandomWeapon();
console.log(randomWeapon);
assert(Object.keys(randomWeapon).includes('name'));
assert(Object.keys(randomWeapon).includes('category'));
