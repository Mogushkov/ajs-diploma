import magicalDamageDealer from './magicalDamageDealer';

export default class Daemon extends magicalDamageDealer {
  constructor(level, type = 'daemon') {
    super(level, type);
  }
}
