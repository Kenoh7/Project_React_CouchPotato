import React,{useState, useEffect}from 'react';
import {Link, useHistory} from 'react-router-dom'
import axios from "axios";

const Home = (props) => {
    const [food, setfood] = useState('');
    const [weather, setweather] = useState([]);
    const history = useHistory();
    
    const submitForm = (e) => {
        e.preventDefault();
        // console.log("clicked")
        history.push(`/results/${food}`);
    }
    const axiosweather = () => {
        axios.get(`https://api.open-meteo.com/v1/forecast?latitude=33.87&longitude=-118.32&hourly=temperature_2m&current_weather=true&temperature_unit=fahrenheit&windspeed_unit=mph&precipitation_unit=inch&timezone=America%2FLos_Angeles`)
        .then((response) => {
            setweather(response.data.current_weather)
            console.log(response.data.current_weather)
        })
        .catch((error) => {
            console.log(error);
        });
    }

    useEffect(() => {
        axiosweather()
    },[]);
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
            <h2 className="title">Search for Recipes</h2>
            <div className="col">
                <div className="col1">
                    <h3>What would you like to make?</h3>
                    <form className="form1" onSubmit={submitForm}>
                        <input className="input" type="text" onChange={ e => setfood(e.target.value)} value={food}/>
                        <input className="btn2" type="submit" value="Search"/>
                    </form>
                </div>
                <div className="col2">
                    <h3>Weather</h3>
                    <img className="img3"src={"https://cdn.pixabay.com/photo/2012/04/18/13/21/clouds-37009_960_720.png"} alt="partly_cloudy" />
                    <p><span className="bold">City:</span> Los Angeles, CA</p>
                    <p><span className="bold">Temperature:</span> {weather.temperature}°F</p>
                    <p><span className="bold">Condition:</span>Partly Cloudy</p>
                    <p><span className="bold">Wind:</span> {weather.windspeed}mph</p>
                </div>
            </div>
        </main>
        <Link to={"/create"}><button className="btn6">Share Your Recipe</button></Link>
    </div>
  )
}

export default Home