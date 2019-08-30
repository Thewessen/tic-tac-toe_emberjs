import { module, test } from 'qunit';
import { visit, currentURL } from '@ember/test-helpers';
import { setupApplicationTest } from 'ember-qunit';

module('Acceptance | game test', function(hooks) {
  setupApplicationTest(hooks);

  test('visiting /game', async function(assert) {
    await visit('/game');
    assert.equal(currentURL(), '/game');
  });
});
