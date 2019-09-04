import Component from '@ember/component';
import { alias } from '@ember/object/computed';

export default Component.extend({
  name: alias('model.name'),
  classNames: [
    'mdl-cell',
    'mdl-cell--4-col',
    'display-name'
  ],
  classNameBindings: [
    'selected:winner'
  ],
  init() {
    this._super(...arguments)
    window.componentHandler.upgradeDom()
  },
  click() {
    if(!this.selected) {
      this.set('selected', true)
      this.select(this.model)
    }
  }
});
