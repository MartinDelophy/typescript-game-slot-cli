import * as  React from 'react'
import { Component, Ref } from 'react'

const Style = require('./style.less') 

import config from './config';

const { width, height, split_x, split_y} = config;

const Xsize:number = width/split_x;
const Ysize:number = height/split_y;




class Stage extends Component<any, any> {
    [x: string]: any;
    myRef: any;
    ctx:any;
    constructor(props:any){
        super(props);
        this.myRef = React.createRef();
        this.state={
            charactor: [],
            food:{}
        }
    }

    componentDidMount = () => {
        let ctx = this.myRef!.current!.getContext("2d");
        this.ctx = ctx;
        this.stageInit();

    }
    draw = (charactor: Object[], food:Object) => {

        this.clear();

    }
    //舞台初始化
    stageInit = () => {
        this.drawLine();
        let  charactor  = this.charactor.push(this.genRandomPoint('dark'));
        let  food = this.genRandomPoint("red");
        this.draw(charactor, food);

    }
    clear = () => {
        let ctx = this.ctx;
        ctx.clearRect(0, 0, width, height);
        this.drawLine();
    }
    //画横竖分割线
    drawLine = () => {
        let ctx = this.ctx;
        for (let i = 0; i < Xsize; i++) {
            ctx.beginPath();
            ctx.moveTo(0, i * split_x);
            ctx.lineTo(width, i * split_x);
            ctx.stroke();
        }
        for (let i = 0; i < Ysize; i++) {
            ctx.beginPath();
            ctx.moveTo(i * split_y, 0);
            ctx.lineTo(i * split_y, height);
            ctx.stroke();
        }
    }
    //点击事件处理
    // handleClick = (e:any) => {
    //     const event = e.nativeEvent;
    //     let posX = ~~(event.layerX / split_x);
    //     let posY = ~~(event.layerY / split_y);
    //     let ctx = this.ctx;
    //     ctx.rect(posX * split_x, posY * split_y, split_x, split_y);
    //     ctx.fillStyle = "green";
    //     ctx.fill();

    // }


    genRandomPoint = (color:String) => {
        let _x = ~~(Math.random() * Xsize);
        let _y = ~~(Math.random() * Ysize);
        let ctx = this.ctx;
        ctx.rect(_x * split_x, _y * split_y, split_x, split_y);
        ctx.fillStyle = color;
        ctx.fill();
        return {_x, _y, color}
    }


    render = () =>{
        return (
            <div>
                <canvas className={Style.canvasBorder} ref={this.myRef} width={width} height = {height}  onClick = {this.handleClick} />
            </div>)
    }
}


export default Stage;