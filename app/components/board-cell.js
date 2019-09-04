import Component from '@ember/component';
import { inject } from '@ember/service';

export default Component.extend({
  logic: inject(),
  winner: false,
  classNameBindings: ['winner'],
  classNames: [
    'board-cell',
    'mdl-cell',
    'mdl-cell--4-col',
    'mdl-typography--text-center',
    'border',
    'no-margin',
    'no-padding'
  ],
  init() {
    this._super(...arguments)
    window.componentHandler.upgradeDom()
  },
  click() {
    if (this.mark.value === ' ' && !this.winner) {
      this.set('mark.value', this.logic.turn)
      this.store(this.index)
    }
  },
});
