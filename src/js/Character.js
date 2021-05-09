export default class Character {
  constructor(level, type = 'generic') {
    this.level = level;
    this.attack = 0;
    this.defence = 0;
    this.health = 50;
    this.type = type;
    // TODO: throw error if user use "new Character()"
    if (new.target.name === 'Character') {
      throw (new Error('Нельзя создавать персонажа такого типа'));
    }
  }

  levelUp() {
    if (this.health === 0) {
      throw (new Error('Персонаж умер'));
    }
    this.level += 1;
    const attackBefore = this.attack;
    const defenseBefore = this.defense;
    const life = this.health;
    const attackAfter = Math.max(attackBefore, (attackBefore * (1.8 - life)) / 100);
    const defenseAfter = Math.max(defenseBefore, (defenseBefore * (1.8 - life)) / 100);
    let lifeAfter = life + 80;
    if (lifeAfter > 100) {
      lifeAfter = 100;
    }
    this.attack = attackAfter;
    this.defense = defenseAfter;
    this.health = lifeAfter;
  }
}
