import React, {useState, useEffect} from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom'

const Favorite = (props) => {
    const [foods, setfoods] = useState([]);

    useEffect(() => {
        axios.get("http://localhost:8000/api/favorite")
        .then(res => {
            // console.log(res.data.recipe);
            setfoods(res.data.recipe);
        })
        .catch(err=> console.log(err))
    },[])

  return (
    <div className="container">
        <header className="nav">
            <h1>CouchPotato</h1>
            <Link to={"/"} className="hbtn">Home</Link>
        </header>
        <main>
            <h4 className="results">My Favorites</h4>
        {
        // JSON.stringify(product)
            foods.map((food,idx) => {
                return (
                <div key={food._id}>
                    <div>
                            {
                            food.favorite ?
                            <div className="row">
                                <div className="row1" key={food._id}>
                                    <img className="img" src={"" + food.image} alt={food.name}/>
                                    <h3>{food.name2}</h3>
                                    <p>(Total time: {food.time}min)</p>
                                    <Link to={"/view/" + food._id}><button className="btn">View</button></Link>
                                </div>
                            </div>
                        : "" 
                            
                            } 
                    </div>
                </div>
                )
            })
        }
        </main>
    </div>
  )
}

export default Favorite