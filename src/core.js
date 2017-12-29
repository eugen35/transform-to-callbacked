/**
 * Возвращаемую асинхронную функцию затем можно промисфицировать bluebird
 * @param func
 * @returns {function} async function with node-style callback
 */
export function transformToCallbacked (func) {
  return function (...args) {
    const callback = args[args.length - 1];
    setImmediate(() => { // Именно за счёт setImmediate(()=>func(args)) получаем асинхронный результат
      try {
        callback(undefined, func(...args)); // первым аргументом идёт ошибка, которой в данном случае нет
      } catch (err) {
        callback(err);
      }
    });
  }
}
