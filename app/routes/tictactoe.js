import Route from '@ember/routing/route';

export default Route.extend({
  beforeModel() {
    this.store.createRecord('game').save() 
  },
  redirect() {
    this.replaceWith('/tictactoe/game')
  }
})
