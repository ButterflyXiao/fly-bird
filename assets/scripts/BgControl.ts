import { _decorator, Component, Node } from 'cc';
import { BirdControl } from './BirdControl';
const { ccclass, property } = _decorator;

@ccclass('BgControl')
export class BgControl extends Component {

    // 背景移动速度
    @property
    speed: number = 400;

    @property
    width: number = 288;

    @property(BirdControl)
    brid: BirdControl = null;

    start() {
        // 监听点击事件
        for(let bg of this.node.children){
            bg.on(Node.EventType.MOUSE_DOWN, (event) => {
                this.brid.fly();
            })
            
        }

    }

    update(deltaTime: number) {
            //移动
        for(let bgNode of this.node.children){
            bgNode.setPosition(
                bgNode.position.x - this.speed * deltaTime,
                bgNode.position.y 
            )
            if(bgNode.position.x < -this.width){
                console.debug(bgNode.position.x)
                bgNode.setPosition(
                    bgNode.position.x + this.width*2,
                    bgNode.position.y
                )
            }
        }
        
    }

}


