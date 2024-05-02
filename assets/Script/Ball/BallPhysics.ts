// Learn TypeScript:
//  - https://docs.cocos.com/creator/manual/en/scripting/typescript.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html

import GameManager from "../GameManager";
import ParticleManager from "../Particle/ParticleManager";

const { ccclass, property } = cc._decorator;

@ccclass
export default class NewClass extends cc.Component {
  onBeginContact(
    contact: cc.PhysicsContact,
    self: cc.PhysicsBoxCollider,
    other: cc.PhysicsCircleCollider
  ) {
    console.log(
      "contact",
      contact.getWorldManifold().points[0].x,
      contact.getWorldManifold().points[0].y
    );
    // console.log(self);
    // console.log(other);

    GameManager.Instance.timeNeedToTouch.SetTimeNeedToTouch();
    console.log("WHY");

    ParticleManager.Instance.SpawnThing(
      contact.getWorldManifold().points[0],
      ParticleManager.Instance._particleName.TouchWallParticle
    );

    // update (dt) {}
  }

  // update (dt) {}
}
