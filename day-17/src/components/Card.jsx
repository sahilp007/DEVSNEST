import './../App.css';

const Card = ({food, calorie}) => {

    return (
        <div className="container">
            <div className="card">

                <h3> {food}</h3>
                <p>This Item contains {calorie} calories</p>
                {/*<button className='btn'>Button</button>*/}
            </div>
        </div>
    );
}

export default Card;
