import * as React from 'react'   //本例子只以shallow(浅渲染，只渲染父组件)为例
import  Com from '../src/Game_one/Game'     //导入需测试的组件

import * as  Adapter from 'enzyme-adapter-react-16'; //适应React-16
import { configure, shallow } from 'enzyme';

configure({ adapter: new Adapter() })    //适应React-16，初始化

test('Item', () => {
    const item = shallow(<Com item="test" />); //传入数据'item'

    expect(item.text()).toBe('test')
})