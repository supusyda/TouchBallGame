// Learn TypeScript:
//  - https://docs.cocos.com/creator/manual/en/scripting/typescript.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html

import Spawn from "../Spawn";

const { ccclass, property } = cc._decorator;

@ccclass
export default class ParticleManager extends Spawn {
  public static Instance: ParticleManager = null;
  public _particleName = {
    TouchWallParticle: "TouchWallParticle",
  };
  protected start(): void {
    ParticleManager.Instance = this;
  }
}
