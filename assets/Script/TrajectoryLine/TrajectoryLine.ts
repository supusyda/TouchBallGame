// Learn TypeScript:
//  - https://docs.cocos.com/creator/manual/en/scripting/typescript.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html

const { ccclass, property } = cc._decorator;

@ccclass
export default class TrajectoryLine extends cc.Component {
  graphics: cc.Graphics = null;
  start() {
    // this.node.on(cc.Node.EventType.MOUSE_MOVE, this.onMouseDown, this);
    this.graphics = this.node.getComponent(cc.Graphics);
    // this.clearLineOverTime();
  }
  drawLine(start: cc.Vec2, endPoint: cc.Vec2, mag: number) {
    this.graphics.clear();
    this.graphics.strokeColor = cc.Color.ORANGE; // Set line color
    this.graphics.lineWidth = 3; // Set line width
    this.graphics.moveTo(start.x, start.y);

    let end = endPoint.mul(mag).add(start);
    this.graphics.lineTo(end.x, end.y);
    this.graphics.stroke();
  }
  drawCircle(start: cc.Vec2, endPoint: cc.Vec2, mag: number) {
    let gap = 14;
    let radius = 4;
    this.graphics.lineWidth = 2; // Set line width
    let pointCount = 0;
    let newCurrentPosMag = 0;
    let newCurrentPos: cc.Vec2 = cc.Vec2.ZERO;
    let end = endPoint.normalize().clone();
    let dir = end.clone().normalizeSelf();

    pointCount = 0;

    let currentPos = start.clone();
    currentPos.x = start.x + end.normalizeSelf().x;
    currentPos.y = start.y + end.normalizeSelf().y;
    // currentPos.x = start.x + this.offSet * end.normalizeSelf().x;
    // currentPos.y = start.y + this.offSet * end.normalizeSelf().y;
    this.graphics.moveTo(start.x, start.y);
    this.graphics.circle(currentPos.x, currentPos.y, radius);
    while (newCurrentPosMag < mag - 50) {
      newCurrentPosMag = dir
        .clone()
        .mul(pointCount * gap)
        .mag();
      newCurrentPos = dir
        .clone()
        .mul(pointCount * gap)
        .add(currentPos);
      this.graphics.circle(newCurrentPos.x, newCurrentPos.y, radius);
      pointCount++;
    }
    this.graphics.fill();
    this.graphics.stroke();
  }
  update(dt) {}
}
