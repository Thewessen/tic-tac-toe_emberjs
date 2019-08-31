import Controller from '@ember/controller';

export default Controller.extend({
  actions: {
    changeBoardState(x, y, value) {
      this.model.boardstate[x][y] = value
      console.log(this.model.boardstate.toString())
      // this.model.save()
    }
  }
});
