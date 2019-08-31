import Component from '@ember/component';

export default Component.extend({
  value: '',
  isWinning: false,
  classNameBindings: ['isWinning'],
  classNames: [
    'board-cell',
    'mdl-cell',
    'mdl-cell--4-col',
    'mdl-typography--text-center',
    'border',
    'no-margin',
    'no-padding'
  ],
  click() {
    const value = 'X'
    this.set('value', value)
    this.store(this.index, value)
  },
  init() {
    this._super(...arguments)
  },
});
