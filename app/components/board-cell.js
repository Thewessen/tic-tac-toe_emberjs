import Component from '@ember/component';
import { inject } from '@ember/service';

export default Component.extend({
  logic: inject(),
  value: '',
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
  click() {
    if (this.value === ' ' && !this.winner) {
      this.set('value', this.logic.turn)
      this.store(this.index)
    }
  },
});
