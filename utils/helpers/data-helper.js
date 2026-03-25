function randomId(prefix = 'id') {
  return `${prefix}-${Date.now()}`;
}

module.exports = { randomId };
