const { NotImplementedError } = require('../extensions/index.js');

/**
 * There's a list of file, since two files cannot have equal names,
 * the one which comes later will have a suffix (k),
 * where k is the smallest integer such that the found name is not used yet.
 *
 * Return an array of names that will be given to the files.
 *
 * @param {Array} names
 * @return {Array}
 *
 * @example
 * For input ["file", "file", "image", "file(1)", "file"],
 * the output should be ["file", "file(1)", "image", "file(1)(1)", "file(2)"]
 *
 */
function renameFiles(names) {
  const countRepeat = new Map(), usedNames = [];

  return names.map((name) => {
    if (usedNames.includes(name)) {
      if (countRepeat.has(name)) {
        countRepeat.set(name, countRepeat.get(name) + 1)
      } else {
        countRepeat.set(name, 1);
      }
      usedNames.push(`${name}(${countRepeat.get(name)})`);
      return `${name}(${countRepeat.get(name)})`
    } else {
      usedNames.push(name);
      return name
    }
  });
}

module.exports = {
  renameFiles
};
