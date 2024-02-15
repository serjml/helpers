function animate({ timing, draw, duration }) {
  let start = performance.now();

  requestAnimationFrame(function animate(time) {
    // timeFraction изменяется от 0 до 1
    let timeFraction = (time - start) / duration;
    if (timeFraction > 1) timeFraction = 1;

    // вычисление текущего состояния анимации
    let progress = timing(timeFraction);

    draw(progress); // отрисовать её

    if (timeFraction < 1) {
      requestAnimationFrame(animate);
    }
  });
}

// -------------------- Функции расчёта времени -------------------

// линейная
function linear(timeFraction) {
  return timeFraction;
}

// ускорение анимации
function quad(timeFraction) {
  return Math.pow(timeFraction, 2);
}

// дуга
function circ(timeFraction) {
  return 1 - Math.sin(Math.acos(timeFraction));
}

// выстрел из лука
function back(x, timeFraction) {
  return Math.pow(timeFraction, 2) * ((x + 1) * timeFraction - x);
}

// отскоки
function bounce(timeFraction) {
  for (let a = 0, b = 1; 1; a += b, b /= 2) {
    if (timeFraction >= (7 - 4 * a) / 11) {
      return -Math.pow((11 - 6 * a - 11 * timeFraction) / 4, 2) + Math.pow(b, 2);
    }
  }
}

// эластичная анимация
function elastic(x, timeFraction) {
  return Math.pow(2, 10 * (timeFraction - 1)) * Math.cos(((20 * Math.PI * x) / 3) * timeFraction);
}

// реверсивные функции: easeOut
function makeEaseOut(timing) {
  return function (timeFraction) {
    return 1 - timing(1 - timeFraction);
  };
}

// реверсивные функции: easeInOut
function makeEaseInOut(timing) {
  return function (timeFraction) {
    if (timeFraction < 0.5) return timing(2 * timeFraction) / 2;
    else return (2 - timing(2 * (1 - timeFraction))) / 2;
  };
}

if (timeFraction <= 0.5) {
  // первая половина анимации
  return timing(2 * timeFraction) / 2;
} else {
  // вторая половина анимации
  return (2 - timing(2 * (1 - timeFraction))) / 2;
}
