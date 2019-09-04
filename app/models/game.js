import DS from 'ember-data';
const { Model } = DS;

export default Model.extend({
  boardstate: DS.attr('board', {
    defaultValue() {
      return Array.from({length: 3}, () => Array(3).fill(' ')) 
    }
  }),
  nicknames: DS.hasMany('nickname')
});
