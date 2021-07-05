import Component from '@ember/component';
import { inject as service } from '@ember/service';
import { alias } from '@ember/object/computed';

export default Component.extend({
  logic: service(),
  hasWinner: alias('logic.hasWinner'),
  isDone: alias('logic.gameDone'),
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
