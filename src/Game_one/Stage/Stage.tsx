import * as  React from 'react'
import { Component, Ref } from 'react'
const Style = require('./style.less') 
console.log(Style)



class Stage extends Component<any, any> {
    [x: string]: any;
    width = 1000;
    height = 1000;
    constructor(props:any){
        super(props);

    }
    getRef = (ref: HTMLCanvasElement) =>{
        this.setState({canvas:ref})
    }  
    render() {
        return (
            <div>
                <canvas className={Style.canvasBorder}  ref={this.getRef} width={this.width} height = {this.height} />
            </div>)
    }
}


export default Stage;