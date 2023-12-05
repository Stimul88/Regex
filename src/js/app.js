import Validator from './Validator.js';

const getName = prompt('Введите логин:')

const validator = new Validator(getName);

alert(validator.validateUsername())
