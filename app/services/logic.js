import Service from '@ember/service';

const zip = (...arrays) => { 
  const columns = [] 
  const iters = arrays.map((array) => array[Symbol.iterator]()) 
  let items = iters.map((iter) => iter.next()) 
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
  gameDone: false,

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
    this.set('gameDone', false)
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
    if(!this.calcWinner() && !this.isDone()) {
      this.swapTurn()
    }
    return this.board.boardstate
  },

  columns() {
    return zip(...this.board.boardstate)
  },

  diagonals() {
    return [
      this.board.boardstate.map((__, i, board) => board[i][i]),
      this.board.boardstate.map((__, i, board) => board[i][2-i])
    ]
  },

  calcWinner() {
    const equal = /XXX|OOO/
    const winner = this.board.boardstate.some((row) => equal.test(row.mapBy('value').join('')))
      || this.columns().some((col) => equal.test(col.mapBy('value').join('')))
      || this.diagonals().some((dia) => equal.test(dia.mapBy('value').join('')))
    this.set('hasWinner', winner)
    return winner
  },
  
  isDone() {
    const done = this.board.boardstate.map((row) => row.mapBy('value').join(''))
      .join('')
      .replace(' ', '').length === 9
    this.set('gameDone', done)
    return done
  }
});
