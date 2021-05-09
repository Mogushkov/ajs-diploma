import magicalDamageDealer from './magicalDamageDealer';

export default class Magician extends magicalDamageDealer {
  constructor(level, type = 'magician') {
    super(level, type);
  }
}
