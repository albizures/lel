import './config.js'

import * as Phaser from 'phaser-ce';

import Game from './Game'
import states from './states';


const game = new Game(window.innerWidth, window.innerHeight)

states.forEach(state => {
  game.state.remove(state.name)
  game.state.add(state.name, state)
})

game.state.start('Boot')

if (module.hot) {
  module.hot.accept(() => location.reload());
}
