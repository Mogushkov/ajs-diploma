import meleeDamageDealer from './meleeDamageDealer';

export default class Undead extends meleeDamageDealer {
  constructor(level, type = 'undead') {
    super(level, type);
  }
}
