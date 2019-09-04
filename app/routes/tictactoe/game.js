import Route from '@ember/routing/route';
import { inject } from '@ember/service';

export default Route.extend({
  logic: inject(),
  model() {
    return this.get('store').peekAll('game').get('lastObject')
  },
  afterModel(model) {
    if (!model) {
      this.replaceWith('tictactoe')
    }
    this.set('logic.board', model)
    if (model.nicknames.length < 2) {
      this.replaceWith('/tictactoe/nicknames')
    }
  }
});
