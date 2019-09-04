import { helper } from '@ember/component/helper';

export default helper(function firstLetter([string]) {
  return string[0];
});
