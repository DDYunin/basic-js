const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an array of domains, return the object with the appearances of the DNS.
 *
 * @param {Array} domains
 * @return {Object}
 *
 * @example
 * domains = [
 *  'code.yandex.ru',
 *  'music.yandex.ru',
 *  'yandex.ru'
 * ]
 *
 * The result should be the following:
 * {
 *   '.ru': 3,
 *   '.ru.yandex': 3,
 *   '.ru.yandex.code': 1,
 *   '.ru.yandex.music': 1,
 * }
 *
 */
function getDNSStats(domains) {
  const resultMap = new Map();
  for (let domain of domains) {
    const names = domain.split('.');
    let domainStr = '';
    for (let i = names.length - 1; i >= 0; i--) {
      domainStr += `.${names[i]}`;
      if (resultMap.has(domainStr)) {
        resultMap.set(domainStr, resultMap.get(domainStr) + 1);
      } else {
        resultMap.set(domainStr, 1);
      }
    }
  }
  return Object.fromEntries(resultMap);
}

module.exports = {
  getDNSStats
};
