import * as Phaser from 'phaser-ce';
import Rack from './Rack';

export default class HexGrid extends Phaser.Group {
  gridWidth: Number;
  gridHeight: Number;
  racks: Rack[] = [];

  constructor (game, gridWidth: number, gridHeight: number) {
    super(game);

    this.gridWidth = gridWidth;
    this.gridHeight = gridHeight;

    let index = 0;
    for (let x = 0; x < this.gridWidth; x++) {
      for (let y = 0; y < this.gridHeight; y++) {
        this.racks[index] = new Rack(this.game, 40, x, y);
        this.add(this.racks[index]);
      }
    }
  }
}