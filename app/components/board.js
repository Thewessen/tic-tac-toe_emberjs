import Component from '@ember/component';
import { inject } from '@ember/service';

export default Component.extend({
  logic: inject(),
  hasWinner: false,
  classNames: [
    'mdl-grid--no-spacing',
    'line-height-1'
  ],
  init() {
    this._super(...arguments)
    this.logic.setBoardstate(this.data)
  },
  actions: {
    checkWinner(x, y) {
      this.logic.setDraw(x, y)
      if(this.logic.hasWinner()) {
        this.logic.swapTurn()
        this.set('hasWinner', true)
      }
      this.store()
    },

    winningPlayer() {
      return this.logic.swapTurn()
    }
  }
});
