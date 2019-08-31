import Service from '@ember/service';

const zip = (...arrays) => { 
  let iters = arrays.map((array) => array[Symbol.iterator]()) 
  let items = iters.map((iter) => iter.next()) 
  let columns = [] 
  while (!items.some((item) => item.done)) { 
    columns.push(items.map((item) => item.value)) 
    items = iters.map((iter) => iter.next()) 
  } 
  return columns 
} 

export default Service.extend({
  turn: null,
  boardstate: null,

  init() {
    this._super(...arguments)
    this.set('turn',
      Math.random() < 0.5
        ? 'X'
        : 'O'
    )
  },

  swapTurn() {
    return this.set('turn',
      this.turn === 'X'
        ? 'O'
        : 'X'
    )
  },

  setBoardstate(boardstate) {
    return this.set('boardstate', boardstate)
  },

  setDraw(x, y) {
    this.boardstate[x][y] = this.turn
    this.swapTurn()
    return this.boardstate
  },

  columns() {
    return zip(...this.boardstate)
  },

  diagonals() {
    // Luckely, the board is 3 by 3
    return [
      this.boardstate.map((__, i, board) => board[i][i]),
      this.boardstate.map((__, i, board) => board[i][2-i])
    ]
  },

  hasWinner() {
    const equal = /XXX|OOO/
    return this.boardstate.some((row) => equal.test(row.join('')))
      || this.columns().some((col) => equal.test(col.join('')))
      || this.diagonals().some((dia) => equal.test(dia.join('')))
  }

});
