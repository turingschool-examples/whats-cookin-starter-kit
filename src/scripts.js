function createId(data) {
    return typeof data === 'number' ? data : Date.now();
}
function checkModule(send) {
  if (typeof module !== 'undefined') {
   module.exports = send;
  }
}
// why doesn't this send a class?

if (typeof module !== 'undefined') {
  module.exports = {createId, checkModule}
}