import * as Phaser from 'phaser-ce';


export default class Rack extends Phaser.Group {
  outerRadius: number;
  innerRadius: number;
  gridX: number
  gridY: number
  gridScale: number
  corners: [Phaser.Point, Phaser.Point, Phaser.Point, Phaser.Point, Phaser.Point, Phaser.Point];

  constructor (game, size: number, x: number, y: number, scale: number = 1) {
    super(game);


    this.outerRadius = size / 2;
    this.innerRadius = this.outerRadius * Math.sqrt(3) / 2;
    this.corners = [
      new Phaser.Point(0, this.outerRadius),
      new Phaser.Point(this.innerRadius, 0.5 * this.outerRadius),
      new Phaser.Point(this.innerRadius, -0.5 * this.outerRadius),
      new Phaser.Point(0, -this.outerRadius),
      new Phaser.Point(-this.innerRadius, -0.5 * this.outerRadius),
      new Phaser.Point(-this.innerRadius, 0.5 * this.outerRadius)
    ];

    this.gridScale = scale;
    this.gridX = x;
    this.gridY = y;
    
    this.x = (x + y * 0.5 - Math.floor(y / 2)) * (this.innerRadius * 1.96);
    this.y = y * (this.outerRadius * 1.5);

    console.log(`${this.gridX}x${this.gridY}`,this.x, this.y);

    if (y % 2 !== 0) {
      this.x -= 0.02
    }
    
    this.create(0, 0, 'hexa');

    const style = {
      font: '10px Arial',
      lineHeight: '5px',
      fill: 'red',
      align: 'center'
    }
    game.add.text(15, 10, `${this.gridX}`, style, this)
    game.add.text(15, 20, `${this.gridY}`, style, this)
  }
}