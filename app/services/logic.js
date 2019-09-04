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
  playerX: null,
  playerO: null,
  board: null,
  hasWinner: false,

  init() {
    this._super(...arguments)
    this.set('turn',
      Math.random() < 0.5
        ? 'X'
        : 'O'
    )
    this.set('playerO', null)
    this.set('playerX', null)
    this.set('board', null)
    this.set('hasWinner', false)
  },

  swapTurn() {
    return this.set('turn',
      this.turn === 'X'
        ? 'O'
        : 'X'
    )
  },

  setDraw(x, y) {
    this.set('board.boardstate[x][y]', this.turn)
    this.calcWinner()
    if(!this.hasWinner) {
      this.swapTurn()
    }
    return this.board.boardstate
  },

  columns() {
    return zip(...this.board.boardstate)
  },

  diagonals() {
    // Luckely, the board is 3 by 3
    return [
      this.board.boardstate.map((__, i, board) => board[i][i]),
      this.board.boardstate.map((__, i, board) => board[i][2-i])
    ]
  },

  calcWinner() {
    const equal = /XXX|OOO/
    // [].some and [].any both work.
    const winner = this.board.boardstate.some((row) => equal.test(row.mapBy('value').join('')))
      || this.columns().some((col) => equal.test(col.mapBy('value').join('')))
      || this.diagonals().some((dia) => equal.test(dia.mapBy('value').join('')))
    this.set('hasWinner', winner)
    return winner
  }

});
