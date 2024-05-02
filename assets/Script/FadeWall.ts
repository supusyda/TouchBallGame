// Learn TypeScript:
//  - https://docs.cocos.com/creator/manual/en/scripting/typescript.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html

const { ccclass, property } = cc._decorator;

@ccclass
export default class FadeWall extends cc.Component {
  FadeWall() {
    console.log("FADE");

    cc.tween(this.node)
      .to(
        0.3,
        {
          scale: 0,
        },
        { easing: "fade" }
      )
      .start();
    // update (dt) {}
  }
}
