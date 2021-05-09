/* eslint-disable consistent-return */
/* eslint-disable prefer-template */
/* eslint-disable max-classes-per-file */
import Character from '../Character';
import MagicalDamageDealer from '../characters/magicalDamageDealer';
import MeleeDamageDealer from '../characters/meleeDamageDealer';
import RangeDamageDealer from '../characters/rangeDamageDealer';
import Bowman from '../characters/Bowman';
import Swordsman from '../characters/Swordsman';
import Magician from '../characters/Magician';
import Vampire from '../characters/Vampire';
import Undead from '../characters/Undead';
import Daemon from '../characters/Daemon';

test('new character должен вызвать ошибку', () => {
  function result() {
    const char = new Character(1);
    return char;
  }
  expect(result).toThrow('Нельзя создать персонажа');
});

test('new MagicalDamageDealer должно вызвать ошибку', () => {
  function result() {
    const char = new MagicalDamageDealer(1);
    return char;
  }
  expect(result).toThrow('Нельзя создать персонажа');
});

test('new MeleeDamageDealer должно вызвать ошибку', () => {
  function result() {
    const char = new MeleeDamageDealer(1);
    return char;
  }
  expect(result).toThrow('Нельзя создать персонажа');
});

test('new RangeDamageDealer должно вызвать ошибку', () => {
  function result() {
    const char = new RangeDamageDealer(1);
    return char;
  }
  expect(result).toThrow('Нельзя создать персонажа');
});

test('new Bowman должно создать персонажа', () => {
  const result = new Bowman(1);
  expect(result).toEqual({
    attack: 25,
    defence: 25,
    health: 50,
    level: 1,
    type: 'bowman',
  });
});

test('new Swordsman должно создать персонажа', () => {
  const result = new Swordsman(1);
  expect(result).toEqual({
    attack: 40,
    defence: 10,
    health: 50,
    level: 1,
    type: 'swordsman',
  });
});

test('new Magician должно создать персонажа', () => {
  const result = new Magician(1);
  expect(result).toEqual({
    attack: 10,
    defence: 40,
    health: 50,
    level: 1,
    type: 'magician',
  });
});

test('new Vampire должно создать персонажа', () => {
  const result = new Vampire(1);
  expect(result).toEqual({
    attack: 25,
    defence: 25,
    health: 50,
    level: 1,
    type: 'vampire',
  });
});

test('new Undead должно создать персонажа', () => {
  const result = new Undead(1);
  expect(result).toEqual({
    attack: 40,
    defence: 10,
    health: 50,
    level: 1,
    type: 'undead',
  });
});

test('new Daemon должно создать персонажа', () => {
  const result = new Daemon(1);
  expect(result).toEqual({
    attack: 10,
    defence: 40,
    health: 50,
    level: 1,
    type: 'daemon',
  });
});
