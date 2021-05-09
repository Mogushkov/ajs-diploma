import Character from '../Character';

export default class RangeDamageDealer extends Character {
  constructor(level, type = 'rangeDamageDealer') {
    super(level, type);
    this.attack = 25;
    this.defence = 25;
    if (new.target.name === 'RangeDamageDealer') {
      throw (new Error('Нельзя создать персонажа'));
    }
  }
}
