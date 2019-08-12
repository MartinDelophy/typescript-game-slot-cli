import * as  React from 'react'
import { Component, Ref } from 'react'

const Style = require('./style.less') 

import config from './config';

const { width, height, split_x, split_y} = config;

const Xsize:number = width/split_x;
const Ysize:number = height/split_y;




class Stage extends Component<any, any> {
    [x: string]: any;
    width = 1000;
    height = 1000;
    myRef: any;
    constructor(props:any){
        super(props);
        this.myRef = React.createRef()

    }

    componentDidMount = () => {
        let ctx = this.myRef!.current!.getContext("2d");
        this.drawLine(ctx);
        
    }
    //画横竖分割线
    drawLine = (ctx:any) => {
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
    render() {
        return (
            <div>
                <canvas className={Style.canvasBorder} ref={this.myRef} width={this.width} height = {this.height} />
            </div>)
    }
}


export default Stage;