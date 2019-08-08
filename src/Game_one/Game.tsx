import * as  React  from 'react' 
import  { Component } from 'react'//本例子只以shallow(浅渲染，只渲染父组件)为例
import Slot from './Slot'
import Stage from './Stage/Stage';

interface  Iitem {
    item: String;
}

// console.log("component", Component);
@Slot({ content: <Stage /> })
class Game extends Component<any, any> {

    render(){
        return (
        <div>
               {this.props.children} 
        </div>)
    }
}


export default Game;