import Swordsman from './characters/Swordsman';
import Bowman from './characters/Bowman';
import Magician from './characters/Magician';
import Undead from './characters/Undead';
import Vampire from './characters/Vampire';
import Daemon from './characters/Daemon';

const commonDataGame = {
  firstPlayer: {
    type: 'user',
    allowedTypes: [Swordsman, Bowman, Magician],
  },
  secondPlayer: {
    type: 'computer',
    allowedTypes: [Undead, Vampire, Daemon],
  },
  boardSize: 8,
};

export default commonDataGame;
