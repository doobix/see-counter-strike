const getRandomInt = require('./random');
const counterStrikeWeapons = require('./counter-strike-weapons.json');

class SeeCounterStrike {
  getRandomWeapon() {
    const weaponsLength = counterStrikeWeapons.weapons.length;
    const randomWeapon = getRandomInt(weaponsLength)
    return counterStrikeWeapons.weapons[randomWeapon];
  }
}

module.exports = SeeCounterStrike;
