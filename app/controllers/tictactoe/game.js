import Controller from '@ember/controller';
import { inject as service } from '@ember/service';
import { computed } from '@ember/object';

export default Controller.extend({
  logic: service(),
  isDone: computed('logic.{gameDone,hasWinner}', function() {
    return this.logic.gameDone || this.logic.hasWinner
  }),
  actions: {
    changeBoardState() {
      this.model.save()
    },
    newGame() {
      this.logic.init()
      this.replaceRoute('index')
    }
  }
});
