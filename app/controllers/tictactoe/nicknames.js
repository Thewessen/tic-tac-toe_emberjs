import Controller from '@ember/controller';
import { inject as service } from '@ember/service';

export default Controller.extend({
  logic: service(),
  classNames: [
    'justify-content-center'
  ],
  actions: {
    selectName(nickname) {
      const board = this.logic.board
      if (board.nicknames.length === 0) {
        board.nicknames.pushObject(nickname)
        this.set('logic.playerX', nickname)
      } else {
        board.nicknames.pushObject(nickname)
        this.set('logic.playerO', nickname)
        board.save()
        this.replaceRoute('/tictactoe/game')
      }
    }
  }
});
