// Learn TypeScript:
//  - https://docs.cocos.com/creator/manual/en/scripting/typescript.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html

import GameManager from "./GameManager";
import ParticleManager from "./Particle/ParticleManager";
import TrajectoryLine from "./TrajectoryLine/TrajectoryLine";

const { ccclass, property } = cc._decorator;

@ccclass
export default class Ball extends cc.Component {
  public static Instance: Ball = null;
  public rigidBody: cc.RigidBody = null;
  public mousePosDir: cc.Vec2 = new cc.Vec2(0, 0);
  @property(cc.Node) public ball: cc.Node = null;
  @property(TrajectoryLine) public trajectoryLine: TrajectoryLine = null;

  @property(Number) public moveSpeed: number = 0;
  public mouseHold: boolean = false;

  protected onLoad(): void {
    Ball.Instance = this;
    this.rigidBody = this.ball.getComponent(cc.RigidBody);
    this.node.on(cc.Node.EventType.TOUCH_END, this.onMouseClick, this);
    this.node.on(cc.Node.EventType.TOUCH_START, this.onMouseStartClick, this);

    this.node.on(cc.Node.EventType.TOUCH_MOVE, this.onMouseMove, this);

    // this.node.on(cc.Node.EventType.TOUCH_END, this.onMouseClick, this);
  }
  SetDirOfBallWithMouse(mousePos: cc.Vec2) {
    // this.dir = mousePos.sub(this.node.getPosition());
    // let X = mousePos.x;
    // let Y = mousePos.y;

    let dir: cc.Vec2 = mousePos
      .sub(this.ball.getPosition())
      .normalize()
      .mul(this.moveSpeed);

    console.log(dir.x, dir.y);
    this.rigidBody.linearVelocity = dir;
  }

  FlyRandom() {
    let randomX = Math.random();
    let randomY = Math.random();
    let dir: cc.Vec2 = new cc.Vec2(randomX, randomY).normalize().mul(100);
    this.rigidBody.linearVelocity = dir;
  }

  onMouseClick(event: cc.Event.EventMouse) {
    let mousePos: cc.Vec2 = new cc.Vec2(
      event.getLocationX(),
      event.getLocationY()
    );
    this.mousePosDir = this.node.convertToNodeSpaceAR(mousePos);
    Ball.Instance.SetDirOfBallWithMouse(this.mousePosDir);
    // console.log(this.trajectoryLine);
    this.trajectoryLine.graphics.clear();
    // console.log("CC");
    this.mouseHold = false;
  }
  onMouseMove(event: cc.Event.EventMouse) {
    let mousePos: cc.Vec2 = new cc.Vec2(
      event.getLocationX(),
      event.getLocationY()
    );
    this.mousePosDir = this.node.convertToNodeSpaceAR(mousePos);

    // .mul(this.moveSpeed);

    // console.log("CC");
  }
  onMouseStartClick(event: cc.Event.EventMouse) {
    let mousePos: cc.Vec2 = new cc.Vec2(
      event.getLocationX(),
      event.getLocationY()
    );
    this.mousePosDir = this.node.convertToNodeSpaceAR(mousePos);

    // this.mousePosDir = mousePos.sub(this.ball.getPosition()).normalize();
    // .mul(this.moveSpeed);

    this.mouseHold = true;
  }

  protected update(dt: number): void {
    this.trajectoryLine.graphics.clear();
    if (this.mouseHold == false) return;
    let dirFormBallToMouse = this.mousePosDir
      .sub(this.ball.getPosition())
      .normalize();

    this.trajectoryLine.drawCircle(
      this.ball.getPosition(),
      dirFormBallToMouse,
      100
    );
  }
}
