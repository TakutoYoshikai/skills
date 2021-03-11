module.exports = function(name, year, month) {
  const now = new Date();
  const date = new Date(year, month - 1);
  const currentMonths = now.getFullYear() * 12 + now.getMonth();
  const dateMonths = date.getFullYear() * 12 + now.getMonth();
  const diff = currentMonths - dateMonths;
  return {
    name: name,
    date: new Date(year, month - 1),
    diff: function() {
      if (diff < 12) {
        return diff + " months";
      }
      return Math.floor(diff / 12) + " years";
    }
  }
}
