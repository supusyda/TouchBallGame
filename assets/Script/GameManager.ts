// Learn TypeScript:
//  - https://docs.cocos.com/creator/manual/en/scripting/typescript.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html

import Ball from "./Ball";
import FadeWall from "./FadeWall";
import TimeNeedToTouch from "./TimeNeedTouch";

const { ccclass, property } = cc._decorator;

@ccclass
export default class GameManager extends cc.Component {
  @property(TimeNeedToTouch) public timeNeedToTouch: TimeNeedToTouch = null;
  @property(FadeWall) public fadeWall: FadeWall = null;

  public static Instance: GameManager = null;

  protected onEnable(): void {
    GameManager.Instance = this;

    cc.director.getPhysicsManager().enabled = true;
    cc.director.getCollisionManager().enabled = true;
    // this.node.on(cc.Node.EventType.TOUCH_END, this.onMouseClick, this);
    // this.node.on(cc.Node.EventType.TOUCH_MOVE, this.onMouseClick, this);
  }
  // onMouseClick(event: cc.Event.EventMouse) {
  //   let mousePos: cc.Vec2 = new cc.Vec2(
  //     event.getLocationX(),
  //     event.getLocationY()
  //   );
  //   mousePos = this.node.convertToNodeSpaceAR(mousePos);
  //   Ball.Instance.SetDirOfBallWithMouse(mousePos);
  //   // console.log("CC");
  // }
  onMouseMove() {}

  // update (dt) {}
}
