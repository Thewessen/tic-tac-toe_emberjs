import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Route | tictactoe/new', function(hooks) {
  setupTest(hooks);

  test('it exists', function(assert) {
    let route = this.owner.lookup('route:tictactoe/new');
    assert.ok(route);
  });
});
