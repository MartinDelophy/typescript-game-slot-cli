import * as  React from 'react'
import { Component, Ref } from 'react'
import * as _ from 'lodash'

const Style = require('./style.less') 

import config from './config';

const { width, height, split_x, split_y, rules} = config;

const Xsize:number = width/split_x;
const Ysize:number = height/split_y;


interface Ifood {
    _x: Number,
    _y: Number,
    color: String
}





class Stage extends Component<any, any> {
    [x: string]: any;
    myRef: any;
    ctx:any;
    food: Ifood;
    charactor: Ifood[];
    
    constructor(props:any){
        super(props);
        this.myRef = React.createRef();
        this.charactor = [];
    }
    componentWillUnmount() {
        document.removeEventListener("keydown", this.onKeyDown)
    }

    componentDidMount = () => {
        document.addEventListener("keydown", this.onKeyDown)
        let ctx = this.myRef!.current!.getContext("2d");
        this.ctx = ctx;
        this.stageInit();

    }
    onKeyDown = (e:any) => {
        let pave : keyof Object = e.code;
        let step:any = rules[pave] ;
        console.log("looooooodash",_)
        let next:any = _.cloneDeep(this.charactor[0]) ;
        next._x += step.x;
        next._y += step.y;
         console.log(next)
        this.charactor.unshift(next);
        this.draw();



    }
    drawCharactor = (charactor: Ifood[]) => {

        charactor!.map((e:any) => {
        let ctx = this.ctx;
        ctx.beginPath();
        ctx.rect(e._x * split_x, e._y * split_y, split_x, split_y);
        ctx.fillStyle = e.color;
        ctx.fill();
        ctx.closePath();
        })

    }

    isDie = (charactor: Ifood[]) => {
        let first = charactor[0];
        let die = first._x < 0 || first._y < 0 || first._x > Xsize || first._y > Ysize
        // if (die) {
        //     alert("haha you lost your life")
        // }
        return die;
    }
    drawFood = (food: any) => {
        let ctx = this.ctx;
        ctx.beginPath();
        ctx.rect(food._x * split_x, food._y * split_y, split_x, split_y);
        ctx.fillStyle = food.color;
        ctx.fill();
        ctx.closePath();

    }
    draw = () => {
        this.clear();
        this.drawFood(this.food);
        this.drawCharactor(this.charactor);
        this.drawLine();

    }
    //舞台初始化
    stageInit = () => {
        this.charactor.push(this.genRandomPoint('black'));
        this.food = this.genRandomPoint("red");
        this.draw();
    }
    gameRunner = () => {
        setInterval(()=> {

        }, 1000)
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


    genRandomPoint = (color: String): Ifood => {
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
            <div >
                <canvas className={Style.canvasBorder} ref={this.myRef} width={width} height = {height}  onClick = {this.handleClick} />
            </div>)
    }
}


export default Stage;