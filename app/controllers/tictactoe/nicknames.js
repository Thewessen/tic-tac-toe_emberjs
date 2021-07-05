import Controller from '@ember/controller';
import { inject as service } from '@ember/service';
import { alias } from '@ember/object/computed';

export default Controller.extend({
  logic: service(),
  board: alias('logic.board'),
  classNames: [
    'justify-content-center'
  ],
  actions: {
    selectName(nickname) {
      if (this.board.nicknames.length === 0) {
        this.board.nicknames.pushObject(nickname)
        this.set('logic.playerX', nickname)
      } else {
        this.board.nicknames.pushObject(nickname)
        this.set('logic.playerO', nickname)
        this.board.save()
        this.replaceRoute('/tictactoe/game')
      }
    }
  }
});
