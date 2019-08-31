import Controller from '@ember/controller';
import { inject } from '@ember/service';

export default Controller.extend({
  logic: inject(),
  hasWinner: false,
  actions: {
    changeBoardState() {
      console.log(this.model.boardstate)
      // this.model.save()
    }
  }
});
