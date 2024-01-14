import { _decorator, Component, Node, random } from 'cc';
const { ccclass, property } = _decorator;

@ccclass('PipeControl')
export class PipeControl extends Component {
    @property
    maxY : number = 185;
    @property
    minY : number = -90;
    @property
    speed : number = 100;

    @property
    width: number = 288;
    start() {
        // this.node.setPosition(
        //     this.node.position.x,
        //     this.minY + (this.maxY - this.minY) * random()
        // )
    }

    update(deltaTime: number) {
        let newX = this.node.position.x - this.speed * deltaTime;
        this.node.setPosition(
            newX,
            this.node.position.y 
        )
        if(newX < -this.width){
            this.node.setPosition(
                newX + this.width*2,
                this.minY + (this.maxY - this.minY) * random()
            )   
        }
        
    }
}


