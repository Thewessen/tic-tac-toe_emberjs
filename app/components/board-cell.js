import Component from '@ember/component';
import { inject as service } from '@ember/service';
import { alias } from '@ember/object/computed';

export default Component.extend({
  logic: service(),
  winner: alias('logic.hasWinner'),
  classNameBindings: ['winner'],
  classNames: [
    'board-cell',
    'mdl-cell',
    'mdl-cell--4-col',
    'text-center',
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
