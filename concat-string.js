/**
 * Функция для объеденения слов в строчку. Функция должна иметь вид: fn(word)(word1)(word2)().
 * Если слово не валидно, то возвращаем результат до нее.
 * Второй необязательный параметр separator разделяет слова. Если не является строкаой, то игнорируем.
 *
 * @param {string} word - слово которое будет объедененно в строку
 * @param {string} word2 - слово которое будет объедененно в строку
 * @param {string} separator - разделитель слов в строке
 * @return {string} строчка из слов переданных в функцию
 *
 */

function concatString(word, separator = '') {
  separator = typeof separator !== 'string' ? '' : separator;
  return function fn(word2) {
    if (typeof word2 !== 'string') {
      return word;
    } else {
      return concatString(word + separator + word2, separator);
    }
  };
}

console.log(concatString('first', '-')('second')(123));
