import * as Phaser from 'phaser-ce';

import * as assets from '../assets.js'

export default class Play extends Phaser.State {
  test: Phaser.Sprite;
  preload() {
    this.game.load.image('test', assets.energy);
  }

  create() {
    this.test = this.game.add.sprite(this.game.world.centerX, this.game.world.centerY, 'test');
    this.test.anchor.setTo(0.5, 0.5);
    this.test.scale.set(4, 4);

    console.log('create play');
    
  }

  update () {
    this.test.rotation -= 0.01;
  }
}