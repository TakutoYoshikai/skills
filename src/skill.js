module.exports = function(name, year, month) {
  return {
    name: name,
    date: new Date(year, month - 1),
  }
}
