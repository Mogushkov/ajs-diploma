import meleeDamageDealer from './meleeDamageDealer';

export default class Swordsman extends meleeDamageDealer {
  constructor(level, type = 'swordsman') {
    super(level, type);
  }
}
