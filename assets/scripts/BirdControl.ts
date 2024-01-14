import { _decorator, Collider2D, Component, Contact2DType, director, IPhysics2DContact, Node, RigidBody2D, v2 } from 'cc';
const { ccclass, property } = _decorator;

@ccclass('BirdControl')
export class BirdControl extends Component {
    @property
    speed: number = 4;
    protected onLoad(): void {
        // 检测碰撞
        let collider = this.getComponent(Collider2D);
        if (collider) {
        
            collider.on(Contact2DType.POST_SOLVE, this.onBeginContact, this);
        }

    }
    start() {

    }

    update(deltaTime: number) {
        
    }

    fly(){
        this.node.getComponent(RigidBody2D).linearVelocity = v2(0, this.speed);
    }

    onBeginContact (selfCollider: Collider2D, otherCollider: Collider2D, contact: IPhysics2DContact | null) {
        // 只在两个碰撞体开始接触时被调用一次
        console.log('onBeginContact');
        // director.pause();
    }
}


