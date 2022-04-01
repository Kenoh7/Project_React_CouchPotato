import React, {useState, useEffect}from 'react';
import { useParams, Link, useHistory } from 'react-router-dom';
import axios from 'axios';

const View = (props) => {
    const [onefood, setonefood] = useState({})
    const [favorite, setfavorite] = useState(false);
    const {id} = useParams();
    const history = useHistory();

    useEffect(()=>{
        axios.get("http://localhost:8000/api/recipe/view/" + id )
            .then(res=>{
                // console.log(res.data.recipe);
                setonefood(res.data.recipe);
                setfavorite(res.data.recipe.favorite);
            })
            .catch(err => console.log(err))
    }, [id])
    
    const submitForm = e =>{
        e.preventDefault();
        axios.put('http://localhost:8000/api/recipe/'+ id, {
            favorite: favorite,
        })
            .then(res => {
                history.push("/view/" + id)
                console.log(res.data);
                console.log("SUCCESSFUL IN CLIENT");
            })
            .catch(err => {
                console.log("ERROR IN CLIENT")
                console.log(err)
            })
    }
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
        <main className="main">
            <div className="col0">
                <div className="row4">
                    <h2 className="space">{onefood.name2}</h2>
                    <img className="img2" src={"" + onefood.image} alt={onefood.name2} />
                    <h3 className="space">Time: {onefood.time} min</h3>
                </div>
                <div className="row5">
                    <h3 className="space">Ingredients:</h3>
                    <p className="space">{onefood.ingredients}</p>
                    <hr className="hrt"/>
                    <h3 className="space">Directions:</h3>
                    <h4>Step 1:</h4>
                    <p>{onefood.direction1}</p>
                    <h4>Step 2:</h4>
                    <p>{onefood.direction2}</p>
                    <h4>Step 3:</h4>
                    <p>{onefood.direction3}</p>
                </div>
                <form onSubmit={submitForm}>
                        {favorite ? "❤️" : ""} &nbsp;
                        <input type="checkbox" onChange={(e)=>setfavorite(e.target.checked)} checked={favorite}/>
                        <button className="btn7">Add to Favorite</button>
                </form>
            </div>
        </main>
        <Link to={"/results/" + onefood.name}><button className="btn5">Back</button></Link>
    </div>
  )
}

export default View