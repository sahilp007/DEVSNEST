import './App.css';
import Card from "./components/Card.jsx";

function App(props) {
    return (

        <div className="App">
            <h1>Calorie Chart</h1>
            <div className='app'>
                <Card food='Pizza' calorie='56'/>
                <Card food='Burger' calorie='69'/>
                <Card food='Coke' calorie='500'/>
                <Card food='Browne' calorie='180'/>
                <Card food='Fried Rice' calorie='90'/>
                <Card food='Lasagna' calorie='200'/>
                <Card food='Pani Puri' calorie='10'/>
                <Card food='Pizza' calorie='56'/>
                <Card food='Burger' calorie='69'/>
                <Card food='Coke' calorie='500'/>
                <Card food='Browne' calorie='180'/>
                <Card food='Fried Rice' calorie='90'/>
                <Card food='Lasagna' calorie='200'/>
                <Card food='Pani Puri' calorie='10'/>
            </div>
        </div>
    );
}

export default App;
