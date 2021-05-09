import rangeDamageDealer from './rangeDamageDealer';

export default class Vampire extends rangeDamageDealer {
  constructor(level, type = 'vampire') {
    super(level, type);
  }
}
