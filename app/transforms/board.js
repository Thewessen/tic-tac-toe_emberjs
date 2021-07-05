import { A } from '@ember/array';
import DS from 'ember-data';

export default DS.Transform.extend({
  deserialize(string) {
    return A(string.split(',')
      .reduce((rows, __, i, cells) =>
        !(i % 3)
        ? [...rows, A(cells.slice(i, i + 3)
          .map((mark) => ({ value: mark }))
        )]
          : rows
      , []))
  },

  serialize(ember_array) {
    return ember_array.toArray()
      .map((row) => row.map((e) => e.value).join(',')).join(',')
  }
});
