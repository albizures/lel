import * as Phaser from 'phaser-ce';

export default class Boot extends Phaser.State {
  init () {
    let value = true;
    Object.defineProperty(this.game.context, 'imageSmoothingEnabled', {
      get() { return false; }
    })
  }
  create() {
    this.game.state.start('Play');
  }
}