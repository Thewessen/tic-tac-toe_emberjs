import Route from '@ember/routing/route';

export default Route.extend({
  model() {
    return [['X', 'O', 'X'],['O','O','X'],['O','X','O']]
  }
});
