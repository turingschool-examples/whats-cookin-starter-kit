function createId(data) {
    return typeof data === 'number' ? data : Date.now();
}


if (typeof module !== 'undefined') {
  module.exports = createId;
}