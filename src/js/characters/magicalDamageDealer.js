import Character from '../Character';

export default class MagicalDamageDealer extends Character {
  constructor(level, type = 'magical') {
    super(level, type);
    this.attack = 10;
    this.defence = 40;
    if (new.target.name === 'MagicalDamageDealer') {
      throw (new Error('Нельзя создать персонажа'));
    }
  }
}
