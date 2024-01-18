/**
 *  Создать класс Calculator. Конструктор класса должен принимать два валидных
числа, иначе бросать ошибку (throw new Error('')). Данный класс должен иметь методы:
- setX(num) - задаёт первому из чисел новое значение. Кидать ошибку если параметр
не передан или является невалидным числом;
- setY(num) - задаёт второму из чисел новое значение. Кидать ошибку если параметр
не передан или является невалидным числом;
- logSum() - выводит в консоль сумму двух наших чисел внутри класса;
- logMul() - выводит в консоль произведение двух наших чисел внутри класса;
- logSub() - выводит в консоль разность двух наших чисел внутри класса;
- logDiv() - выводит в консоль частное двух наших чисел внутри класса ИЛИ кидает
ошибку, если второе число (Y) равняется нулю.
!ВАЖНО! Все методы класса должны отрабатывать корректно ДАЖЕ в случае
копирования функций в отдельные переменные
 *
 * @param {number} x - первое число
 * @param {number} y - второе число
 * @param {number} num - число в сеттере
 *
 */

class Calculator {
  constructor(x, y) {
    if (!Number.isFinite(x) || !Number.isFinite(y)) {
      throw new Error(`x and y must be a number`);
    }

    this._x = x;
    this._y = y;
  }

  _checkNum(num) {
    if (!Number.isFinite(num)) {
      throw new Error(`A number must be passed`);
    }
  }

  setX = (num) => {
    this._checkNum(num);
    this._x = num;
  };

  setY = (num) => {
    this._checkNum(num);
    this._y = num;
  };

  logSum = () => {
    console.log(this._x + this._y);
  };

  logMul = () => {
    console.log(this._x * this._y);
  };

  logSub = () => {
    console.log(this._x - this._y);
  };

  logDiv = () => {
    if (this._y === 0) {
      throw new Error(`The divisor must not be equal 0`);
    }

    console.log(this._x / this._y);
  };
}

const calculator = new Calculator(12, 3);
calculator.logSum(); // 15
calculator.logDiv(); // 4
calculator.setX(15);
calculator.logDiv(); // 5
const logCalculatorDiv = calculator.logDiv;
logCalculatorDiv(); // 5
// calculator.setY(444n); // Ошибка!
