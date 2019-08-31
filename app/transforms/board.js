import DS from 'ember-data';

export default DS.Transform.extend({
  deserialize(string) {
    return string.split(',')
      .reduce((rows, __, i, cells) =>
        !(i % 3)
          ? [...rows, cells.slice(i, i + 3)]
          : rows
      , [])
  },

  serialize(array) {
    return array.map((row) => row.join(',')).join(',')
  }
});
