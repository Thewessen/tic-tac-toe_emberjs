import DS from 'ember-data';
const { Model } = DS;

export default Model.extend({
  boardstate: DS.attr('board', {
    defaultValue() {
      return Array.from({length: 3}, () => [...'   ']) 
    }
  }),
  nicknames: DS.hasMany('nickname')
});
