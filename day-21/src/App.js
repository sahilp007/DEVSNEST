import './App.css';
import Card from "./components/Card.jsx";
import {useState} from "react";

function App() {
    const [data, setData] = useState([
        {
            id: 0,
            food: 'Pizza',
            calorie: 69
        },
        {
            id: 1,
            food: 'Burger',
            calorie: 691
        },
        {
            id: 2,
            food: 'Coke',
            calorie: 692
        },
        {
            id: 3,
            food: 'Browne',
            calorie: 693
        },
        {
            id: 4,
            food: 'Fried Rice',
            calorie: 694
        },
        {
            id: 5,
            food: 'Lasagna',
            calorie: 695
        },
        {
            id: 6,
            food: 'Pani Puri',
            calorie: 696
        },
        {
            id: 7,
            food: 'Pizza',
            calorie: 697
        }
    ]);

    return (
        <div className="App">
            <h1>Calorie Chart</h1>
            <div className='app'>
                {data.length ? (
                    data.map(({calorie, food, id}) => (
                            <Card
                                key={id}
                                calorie={calorie}
                                data={data}
                                setData={setData}
                                food={food}
                                id={id}
                            />
                        )
                    )) : (
                    <h1 style={{display: "flex", justifyContent: "center"}}>
                        no entry
                    </h1>
                )}
            </div>
        </div>
    );
}

export default App;
