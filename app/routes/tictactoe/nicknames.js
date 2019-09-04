import Route from '@ember/routing/route';

export default Route.extend({
  model() {
    return this.get('store').findAll('nickname')
  },
  beforeModel() {
    if(!this.store.peekAll('game').get('lastObject')) {
      this.replaceWith('index')
    }
  }
});
