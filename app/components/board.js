import Component from '@ember/component';
import { inject } from '@ember/service';
import { alias } from '@ember/object/computed';

export default Component.extend({
  logic: inject(),
  hasWinner: alias('logic.hasWinner'),
  classNames: [
    'mdl-grid--no-spacing',
    'line-height-1'
  ],
  actions: {
    checkWinner(x, y) {
      this.logic.setDraw(x, y)
      this.store()
    }
  }
});
