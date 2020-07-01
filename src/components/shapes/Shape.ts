import { Graphics } from 'pixi.js';

export default class Shape extends Graphics {
  private sw: number;
  private sh: number;
  private types = [
    'circle', 'ellips', '3sides', '4sides', '5sides', '6sides',
  ];

  constructor(width: number, height: number, posX: number | null, posY: number | null) {
    super();
    this.sw = width;
    this.sh = height;
    this.interactive = true;
    this.buttonMode = true;
    this.beginFill(+this.randColor(), 1);
    this.zIndex = 1;
    switch (this.types[Math.floor(Math.random() * this.types.length)]) {
      case 'circle':
        this.drawCircle(posX || this.rand(this.sw / 2), 0, this.rand(this.sw / 4));
        this.y = posY || -this.height / 2;
        break;
      case 'ellips':
        this.drawEllipse(posX || this.rand(this.sw / 2), 0, this.rand(this.sw / 4), this.rand(this.sh / 4));
        this.y = posY || -this.height / 2;
        break;
      case '3sides':
        this.drawPolygon([
          0, 0,
          this.rand(this.sw / 2), this.rand(this.sh / 2),
          this.rand(this.sw / 2), this.rand(this.sh / 2),
          0, 0,
        ]);
        this.x = posX || this.rand(this.sw / 2);
        this.y = posY || -this.height;
        break;
      case '4sides':
        this.drawPolygon([
          0, 0,
          this.rand(this.sw / 2), this.rand(this.sh / 2),
          this.rand(this.sw / 2), this.rand(this.sh / 2),
          this.rand(this.sw / 2), this.rand(this.sh / 2),
          0, 0,
        ]);
        this.x = posX || this.rand(this.sw / 2);
        this.y = posY || -this.height;
        break;
      case '5sides':
        this.drawPolygon([
          0, 0,
          this.rand(this.sw / 2), this.rand(this.sh / 2),
          this.rand(this.sw / 2), this.rand(this.sh / 2),
          this.rand(this.sw / 2), this.rand(this.sh / 2),
          this.rand(this.sw / 2), this.rand(this.sh / 2),
          0, 0,
        ]);
        this.x = posX || this.rand(this.sw / 2);
        this.y = posY || -this.height;
        break;
      case '6sides':
        this.drawPolygon([
          0, 0,
          this.rand(this.sw / 2), this.rand(this.sh / 2),
          this.rand(this.sw / 2), this.rand(this.sh / 2),
          this.rand(this.sw / 2), this.rand(this.sh / 2),
          this.rand(this.sw / 2), this.rand(this.sh / 2),
          this.rand(this.sw / 2), this.rand(this.sh / 2),
          0, 0,
        ]);
        this.x = posX || this.rand(this.sw / 2);
        this.y = posY || -this.height;
        break;
    }
    this.endFill();
  }

  private rand(num: number): number {
    return Math.floor(Math.random() * (num + 1));
  }

  private randColor(): string {
    return `0x${Math.floor(Math.random() * 16777215).toString(16)}`;
  }
}
