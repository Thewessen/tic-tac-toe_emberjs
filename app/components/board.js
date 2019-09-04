import Component from '@ember/component';
import { inject } from '@ember/service';

export default Component.extend({
  logic: inject(),
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
