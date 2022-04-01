import React, {useState, useEffect} from 'react';
import axios from 'axios';
import {Link, useParams} from 'react-router-dom';

const Results = (props) => {
    const {food} = useParams();
    const [foods, setfoods] = useState([]);

    useEffect(() => {
        axios.get(`http://localhost:8000/api/recipe/${food}`)
        .then(res => {
            // console.log(res.data);
            setfoods(res.data.recipe);
        })
        .catch(err=> console.log(err))
    },[])

  return (
    <div className="container">
        <header className="nav">
            <div>
                <h1>CouchPotato</h1>
            </div>
            <div>
                <Link to={"/"} className="hbtn">Home</Link>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                <Link to={"/favorite"} className="hbtn">My Favorite</Link>
            </div>
        </header>
        <main>
            <h4 className="results">Results</h4>
            <div className="row">
        {
        // JSON.stringify(foods)
            foods.map((foodlist,idx) => {
                return (
                <div className="row1" key={foodlist._id}>
                    <img className="img" src={"" + foodlist.image} alt={foodlist.name}/>
                    <h3>{foodlist.name2}</h3>
                    <p>(Total time: {foodlist.time}min)</p>
                    <Link to={"/view/" + foodlist._id}><button className="btn">View</button></Link>
                </div>
            )
        })
        }
            </div>
            <Link to={"/"}><button className="btn4">Back</button></Link>
        </main>
    </div>
  )
}

export default Results