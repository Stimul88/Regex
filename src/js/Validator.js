export default class Validator {
  constructor(name) {
    this.name = name
  }

  validateUsername () {
    if (/(^[a-zA-Z])([a-zA-Z-_][0-9]{0,3})+([a-zA-Z]$)/.test(this.name)) {
      return 'Принято'
    } else {
      return '1. Допустимы только латинские буквы, символы тире -, подчёркивания _ и цифры (0-9)\n' +
        '2. Имя не должно содержать подряд более трёх цифр, а также начинаться и заканчиваться цифрами, символами подчёркивания или тире.'
    }
  }
}