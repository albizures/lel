import * as Phaser from 'phaser-ce';

import * as assets from '../assets.js'

export default class Boot extends Phaser.State {
  init () {
    let value = true;
    Object.defineProperty(this.game.context, 'imageSmoothingEnabled', {
      get() { return false; }
    })
  }

  preload() {
    this.game.load.image('energy', assets.energy);
    this.game.load.image('hexa', assets.hexa);
  }
  create() {
    this.game.state.start('Play');
  }
}