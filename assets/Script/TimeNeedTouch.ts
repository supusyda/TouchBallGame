// Learn TypeScript:
//  - https://docs.cocos.com/creator/manual/en/scripting/typescript.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html

import GameManager from "./GameManager";

const { ccclass, property } = cc._decorator;

@ccclass
export default class TimeNeedToTouch extends cc.Component {
  @property(cc.Label)
  label: cc.Label = null;

  @property
  public TimeNeedToTouch: number = 0;
  public isOpenDoor: boolean = false;

  // LIFE-CYCLE CALLBACKS:

  // onLoad () {}

  start() {
    this.label.string = this.TimeNeedToTouch.toString();
  }
  SetTimeNeedToTouch() {
    this.label.string = this.TimeNeedToTouch.toString();
    if (this.TimeNeedToTouch == 0 && this.isOpenDoor == false) {
      GameManager.Instance.fadeWall.FadeWall();
      this.isOpenDoor = true;
    } else if (this.TimeNeedToTouch > 0) {
      this.TimeNeedToTouch--;
    }
  }

  // update (dt) {}
}
