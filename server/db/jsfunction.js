function random_item(items) {
  return items[Math.floor(Math.random() * items.length)];
}

module.exports = { random_item };
