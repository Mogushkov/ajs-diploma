import { generateTeam } from './generators';
import Character from './Character';

export default class Team {
  constructor(type, allowedTypes) {
    this.type = type;
    this.allowedTypes = allowedTypes;
    this.members = new Set();
  }

  createTeam(level, userTeam) {
    const characterCount = this.checkCharacterCount(level, userTeam);
    const allowedTypes = this.checkAllowedTypes(level);
    const maxLevel = level;
    const { possiblePositions } = this;
    const result = generateTeam(allowedTypes, maxLevel, characterCount, possiblePositions);
    this.addAll(result);
  }

  checkCharacterCount(level, userTeam) {
    if (this.type === 'user' && level === 1) {
      return 2;
    } if (this.type === 'computer') {
      const array = userTeam.toArray();
      return array.length + 1;
    } throw (new Error('Для этого игрока невозможно создать группу'));
  }

  checkAllowedTypes(level) {
    let end = level + 1;
    const playerAllowedTypes = this.allowedTypes;
    if (level > playerAllowedTypes.length) {
      end = playerAllowedTypes.length;
    }
    return playerAllowedTypes.slice(0, end);
  }

  add(member) {
    if (member instanceof Character) {
      if (this.members.has(member)) {
        throw (new Error('Нельзя добавить уже имеющегося персонажа'));
      }
      this.members.add(member);
    } else {
      throw (new Error('Можно добавить только объект класса Character'));
    }
  }

  addAll(...rest) {
    rest.forEach((member) => {
      this.members.add(member);
    });
  }

  toArray() {
    return Array.from(this.members);
  }
}
