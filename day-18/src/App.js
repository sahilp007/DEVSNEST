import './App.css';

function App() {
    const checkers =[];
    for(let i=0;i<8;i++){
        checkers.push(<div className='box'/>)
    }
    return (

        <div className="App">
            <div className="board">
                <div className="row">{checkers}</div>
                <div className="row">{checkers}</div>
                <div className="row">{checkers}</div>
                <div className="row">{checkers}</div>
                <div className="row">{checkers}</div>
                <div className="row">{checkers}</div>
                <div className="row">{checkers}</div>
                <div className="row">{checkers}</div>
            </div>

        </div>
    );
}

export default App;
