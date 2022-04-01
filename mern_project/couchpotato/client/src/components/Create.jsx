import React, {useState} from 'react'
import axios from 'axios'
import {useHistory} from 'react-router-dom'
import {Link} from 'react-router-dom';

const Create = (props) => {
    const [name, setname] = useState("");
    const [name2, setname2] = useState("");
    const [image, setimage] = useState("");
    const [ingredients, setingredients] = useState("");
    const [direction1, setdirection1] = useState("");
    const [direction2, setdirection2] = useState("");
    const [direction3, setdirection3] = useState("");
    const [time, settime] = useState("");
    const [favorite, setfavorite] = useState(false);
    const [errors,setErrors] = useState([]);
    const history = useHistory();


    const submitForm = e =>{
        e.preventDefault();
        axios.post('http://localhost:8000/api/recipe/new', {
            name: name,
            name2: name2,
            image: image,
            ingredients: ingredients,
            direction1: direction1,
            direction2: direction2,
            direction3: direction3,
            time: time,
            favorite: favorite
        })
            .then(res => {
                console.log(res.data);
                console.log("SUCCESSFUL IN CLIENT");
                history.push("/")
            })
            .catch(err => {
                console.log("ERROR IN CLIENT")
                console.log(err.response.data)
                
                const {errors} = err.response.data.error;
                const messages = Object.keys(errors).map( error => errors[error].message)
                console.log(messages);
                setErrors(messages);
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
            <div className="column">
                <h3>Share your Recipe</h3>
                <form className="form1" onSubmit={submitForm}>
                    <label>Category:</label>
                    <input type="text" onChange={(e)=>setname(e.target.value)} value={name}/>
                    <label>Name:</label>
                    <input type="text" onChange={(e)=>setname2(e.target.value)} value={name2}/>
                    <label>Image Url:</label>
                    <input type="text" onChange={(e)=>setimage(e.target.value)} value={image}/>
                    <label>Ingredients</label>
                    <input type="text" onChange={(e)=>setingredients(e.target.value)} value={ingredients}/>
                    <label>Step 1:</label>
                    <textarea type="text" rows="4" cols="50" onChange={(e)=>setdirection1(e.target.value)} value={direction1}/>
                    <label>Step 2:</label>
                    <textarea type="text" rows="4" cols="50" onChange={(e)=>setdirection2(e.target.value)} value={direction2}/>
                    <label>Step 3:</label>
                    <textarea type="text" rows="4" cols="50" onChange={(e)=>setdirection3(e.target.value)} value={direction3}/>
                    <label>Cook Time</label>
                    <input type="number" onChange={(e)=>settime(e.target.value)} value={time}/>
                    <label>Add to Favorites?</label>
                    <input type="checkbox" onChange={(e)=>setfavorite(e.target.checked)} checked={favorite}/>
                    <button className="btn2" type="submit">Add Recipe</button>
                </form>
            <>
                {errors.map((err, idx) => <p style= {{color: "red"}} key={idx}>{err}</p>)}
            </>
            </div>
        </main>
    </div>
  )
}

export default Create