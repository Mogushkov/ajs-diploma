import rangeDamageDealer from './rangeDamageDealer';

export default class Bowman extends rangeDamageDealer {
  constructor(level, type = 'bowman') {
    super(level, type);
  }
}
