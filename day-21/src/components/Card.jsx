import '../App.css';

const Card = ({food, calorie, id, data, setData}) => {
    const deleteEle = (e) => {
        const modifiedData = data.filter((ele) => ele.id !== id);
        setData([...modifiedData]);
    };
    return (
        <div className="container">

        </div>
    );
}

export default Card;
