import * as React from 'react';
import { PureComponent } from 'react';

interface Icontent {
    content:  React.ReactElement
}


export default (props: Icontent) => {
    const { content } = props;
    
    return (WrappedComponent: typeof React.Component) =>
        class Wrapper extends PureComponent {
            
            render (){
               // const str = this.props;
                return (
                    <WrappedComponent>
                        {
                            content 
                        }        
                    </WrappedComponent>
                )
            }
        }
}