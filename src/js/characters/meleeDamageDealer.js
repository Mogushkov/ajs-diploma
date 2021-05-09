import Character from '../Character';

export default class MeleeDamageDealer extends Character {
  constructor(level, type = 'MeleeDamageDealer') {
    super(level, type);
    this.attack = 40;
    this.defence = 10;
    if (new.target.name === 'MeleeDamageDealer') {
      throw (new Error('Нельяз создать персонажа'));
    }
  }
}
