import './config.js'

import * as Phaser from 'phaser-ce';

import Game from './Game'
import states from './states';


declare global {
  interface Window { game: Game; }
}



function init() {
  if (!window.game) {
    window.game = new Game(window.innerWidth, window.innerHeight)
  }
  const game = window.game;
  
  states.forEach(state => {
    game.state.remove(state.name)
    game.state.add(state.name, state)
  })

  game.state.start('Boot')
}

window.onload = () => {
  init();
}


module.hot.accept(init)