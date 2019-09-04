import Controller from '@ember/controller';
import { inject as service } from '@ember/service';
import { alias } from '@ember/object/computed';

export default Controller.extend({
  logic: service(),
  hasWinner: alias('logic.hasWinner'),
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
