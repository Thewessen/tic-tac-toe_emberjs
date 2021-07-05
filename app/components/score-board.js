import Component from '@ember/component';
import { inject as service } from '@ember/service';
import { alias } from '@ember/object/computed';

export default Component.extend({
  logic: service(),
  classNames: [
    'mdl-grid',
    'mdl-cell',
    'mdl-cell--5-col'
  ],
  playerX: alias('logic.playerX'),
  playerO: alias('logic.playerO')
});
