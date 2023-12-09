import Validator from '../Validator.js';





// const heroArray = ['Bowman', 'Swordsman', 'Magician', 'Daemon', 'Undead', 'Zombie'];
//
// class Boomer extends Character {
//   constructor(name) {
//     super(name, 'Boomer', 25, 25);
//   }
// }
//
// class Pop extends Character {
//   constructor(name) {
//     super(name, 'Bowman', 25, 25);
//     this.health = 0;
//   }

// }

test('correct login test', () => {
  const validator = new Validator('Lui');
  const login = validator.validateUsername()
  expect(login).toBe('Принято');
});

test('login with - test', () => {
  const validator = new Validator('-Lui');
  const login = validator.validateUsername()
  expect(login).toBe('1. Допустимы только латинские буквы, символы тире -, подчёркивания _ и цифры (0-9)\n' +
    '2. Имя не должно содержать подряд более трёх цифр, а также начинаться и заканчиваться цифрами, символами подчёркивания или тире.');
});


test('login with number in start test', () => {
  const validator = new Validator('12Lui');
  const login = validator.validateUsername()
  expect(login).toBe('1. Допустимы только латинские буквы, символы тире -, подчёркивания _ и цифры (0-9)\n' +
    '2. Имя не должно содержать подряд более трёх цифр, а также начинаться и заканчиваться цифрами, символами подчёркивания или тире.');
});


test('login with three number test', () => {
  const validator = new Validator('Lui_123_Lui');
  const login = validator.validateUsername()
  expect(login).toBe('Принято');
});

test('login with four number test', () => {
  const validator = new Validator('Lui_1234_Lui');
  const login = validator.validateUsername()
  expect(login).toBe('1. Допустимы только латинские буквы, символы тире -, подчёркивания _ и цифры (0-9)\n' +
    '2. Имя не должно содержать подряд более трёх цифр, а также начинаться и заканчиваться цифрами, символами подчёркивания или тире.');
});

test('login with cyrillic letter at the beginning test', () => {
  const validator = new Validator('ЯDamir');
  const login = validator.validateUsername()
  expect(login).toBe('1. Допустимы только латинские буквы, символы тире -, подчёркивания _ и цифры (0-9)\n' +
    '2. Имя не должно содержать подряд более трёх цифр, а также начинаться и заканчиваться цифрами, символами подчёркивания или тире.');
});