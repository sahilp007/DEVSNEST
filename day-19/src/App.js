import React, {Component} from 'react';
import './App.css'

class Counter extends Component {
    state = {
        counter: 7
    };

    handleIncrement = () => {
        this.setState(previous => ({counter: previous.counter + 1}))
    }
    handleDecrement = () => {
        this.setState(previous => ({counter: previous.counter - 1}))
    }

    render() {

        return (
            <div className='container'>
                <div className='card'>
                    <button className='btn'
                            onClick={this.handleIncrement}
                    >
                        -
                    </button>

                    {this.state.counter}

                    <button className='btn'
                            onClick={this.handleDecrement}
                    >
                        +
                    </button>
                </div>
            </div>
        );
    }
}


class App extends Component {
    render() {
        return (
            <div className='App'>
                <div className='app'>
                    <h1>Complete all the tasks</h1><br/>
                    <Counter/>
                    <Counter/>
                    <Counter/>
                    <Counter/>

                </div>
            </div>
        );
    }
}

export default App;