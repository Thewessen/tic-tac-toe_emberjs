import Component from '@ember/component';

export default Component.extend({
  classNames: [
    'mdl-grid',
    'mdl-cell',
    'mdl-cell--8-col',
    'justify-content-center',
    'no-wrap',
    'no-margin',
    'no-padding'
  ],
  init() {
    this._super(...arguments)
  },
  actions: {
    clickRow(x, y, value) {
      this.boardStore(x, y, value)
    }
  }
});
