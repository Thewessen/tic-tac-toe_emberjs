import { module, test } from 'qunit';
import { visit, currentURL } from '@ember/test-helpers';
import { setupApplicationTest } from 'ember-qunit';

module('Acceptance | game test', function(hooks) {
  setupApplicationTest(hooks);

  test('visiting /game', async function(assert) {
    await visit('/game');
    assert.equal(currentURL(), '/game');
  });

  test('should fetch new data from a rest api when starting a game', async function(assert) {
  })

  test('should render given data into a  3 by 3 grid', async function(assert) {
  })

  test('should random pick a player to start the game', async function(assert) {
  })

  test('a player should be able to click the grid', async function(assert) {
  })

  test('after clicking the grid, the mark of the current player should appear', async function(assert) {
  })

  test('should swap turns after a player action', async function(assert) {
  })

  test('should declare a winner when a player has three in a row', async function(assert) {
  })

  test('should stop when the board is full, declaring a draw', async function(assert) {
  })

  test('should give the options of starting a new game after game is done', async function(assert) {
  })

  test('should post the game data to the server', async function(assert) {
  })
});
