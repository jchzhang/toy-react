console.log('hello world');
import { React, Component } from './toyReact.js';
class MyComponent2 extends Component{
    render() {
        return <div>
            jch
        </div>
    }
}
class MyComponent extends Component {
    render() {
        return <div id='test' >
            <h1>hello world</h1>
            <span>2</span>
            <div>
                <span>1</span>
                <span>2</span>
                <MyComponent2 />
            </div>
        </div>
    }
}
let a = <MyComponent name="div" id='1'>
</MyComponent>;
// console.log(a);
React.render(
    a,
    document.body
)
