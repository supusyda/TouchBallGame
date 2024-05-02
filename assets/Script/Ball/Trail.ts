// Learn TypeScript:
//  - https://docs.cocos.com/creator/manual/en/scripting/typescript.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html

const { ccclass, property } = cc._decorator;

@ccclass
export default class NewClass extends cc.Component {
  @property(cc.Color)
  color: cc.Color = cc.Color.WHITE;
  @property(cc.Node)
  target: cc.Node = null;
  @property(cc.Float)
  width: number = 10;

  @property(cc.Float)
  trailLength: number = 40;

  private trailPoints: cc.Vec2[] = [];

  private graphics: cc.Graphics = null;

  start() {
    // Create a graphics node
    this.graphics = this.node.getComponent(cc.Graphics);
    console.log(this.graphics);

    // this.scheduleUpdate();
  }

  update(dt: number) {
    // Add current position to the trail points
    this.trailPoints.push(this.target.getPosition());

    // Remove old points if trail length is exceeded
    while (this.trailPoints.length > this.trailLength) {
      this.trailPoints.shift();
      //   console.log("this.trailPoints.shift();", this.trailPoints.shift());
    }

    // Clear graphics
    this.graphics.clear();

    // Draw the trail
    this.graphics.lineWidth = this.width;
    this.graphics.strokeColor = this.color;
    for (let i = this.trailPoints.length - 2; i >= 0; --i) {
      this.graphics.moveTo(this.trailPoints[i].x, this.trailPoints[i].y);
      this.graphics.lineTo(
        this.trailPoints[i + 1].x,
        this.trailPoints[i + 1].y
      );
      this.graphics.stroke();

      this.graphics.lineWidth = this.graphics.lineWidth - 1;
    }
  }

  // update (dt) {}
}
