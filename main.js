console.log('hello world');
import { React, Component } from './toyReact.js';
class MyComponent2 extends Component {
    render() {
        return <div>
            jch
        </div>
    }
}
class Square extends Component {
    constructor(props) {
        super(props);
        this.state = {
            value: null
        };
    }
    render() {
        return (
            <button className="square" onClick={() => this.setState({ value: 'x' })}>
                {this.state.value ?? this.props.value}
            </button>
        );
    }
}
class Board extends Component {
    renderSquare(i) {
        return (
            <Square
                value={this.props.squares[i]}
                onClick={() => this.props.onClick(i)}
            />
        );
    }

    render() {
        return (
            <div>
                <div className="board-row">
                    {this.renderSquare(0)}
                    {this.renderSquare(1)}
                    {this.renderSquare(2)}
                </div>
                <div className="board-row">
                    {this.renderSquare(3)}
                    {this.renderSquare(4)}
                    {this.renderSquare(5)}
                </div>
                <div className="board-row">
                    {this.renderSquare(6)}
                    {this.renderSquare(7)}
                    {this.renderSquare(8)}
                </div>
            </div>
        );
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
                {/* {this.children} */}
            </div>
        </div>
    }
}
let a = <MyComponent name="div" id='1'>
    <div>123</div>
</MyComponent>;
let b = <Board squares={[1, 2, 3, 4, 5, 6, 7, 8, 9]} />
// console.log(a);
React.render(
    b,
    document.body
)
