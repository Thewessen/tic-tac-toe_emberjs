import Component from '@ember/component';

export default Component.extend({
  actions: {
    makeMove(cell) {
      alert(cell)
    }
  }
});
