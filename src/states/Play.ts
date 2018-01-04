import * as Phaser from 'phaser-ce';

import HexGrid from '../components/HexGrid';

export default class Play extends Phaser.State {
  test: Phaser.Sprite;
  canvas: HexGrid;

  create() {
    this.test = this.game.add.sprite(this.game.world.centerX, this.game.world.centerY, 'energy');
    this.test.anchor.setTo(0.5, 0.5);
    this.test.scale.set(4, 4);

    this.canvas = new HexGrid(this.game, 4, 4);

    this.stage.backgroundColor = '#fff';

    this.canvas.scale.set(10, 10)
  }

  update () {
    this.test.rotation -= 0.01;
  }
}