/* REACT NOTES */

/* ==== Getting Started ==== */

/* == Create empty react project == */
npx create-react-app appname (create empty react application)
cd appname (change directory to appname)
npm start (start appname to localhost) 

// == Create necessary folders == 
// check that I am in folder appname
cd src // change to directory "src"
mkdir components // create directory "components"
cd appname // change to directory back to 'appname'
mkdir pages // create directory "pages"

/* ==== Router DOM ====
link between different pages within a SPA (Singe Page Application) react application */

// == Install router DOM ==
// type the following comand in the terminal (make sure to be in the right folder)
npm i react-router-dom

// create folder "pages" within src folder
// create the desired pages within the "pages" folder as .js components
// go to APP.js and import react router DOM
import {Browser, Routes, Route } from "react-router-dom";

// We create pages and then have to create a route for each page
// There are guarded routes that can only be accessed based on a condition (eg. login)

// == Import pages ==
import Home from "./pages/Home.js";
import Contact from "./pages/Contact.js"
import About from "./pages/About.js";
import Profile from "./pages/Profile.js"

// == Go to App.js and create Routes ==
    <BrowserRouter> {/* Let react know we want to use routes */}
        <Routes>
            <Route path="/" element={<Home/>}/> {/* define route path and then assign element */}
            <Route path="/about" element={<About/>}/>
            <Route path="/contact" element={<Contact/>}/>
            <Route path="/profile" element={<Profile/>}/>
        </Routes>
    </BrowserRouter>

// ==== create a navigation component ====
// import "Link" from "react-router-dom";
import {Link} from "react-router-dom";

// use stateless function to create a navigation component
const Navigation = () => {
    return ( 
        <nav>
            <Link to="/">Home</Link>
            <Link to="/about">About</Link>
            <Link to="/contact">Contact</Link>
            <Link to="/profile">Profile</Link>
        </nav>
    );
}
export default Navigation;

// go to the App.js and integrate "Navigation" component 
function App() {
    return (
    <div className="App">
        <BrowserRouter>
        <Navigation /> {/* Here we connect the Navigation Component GLOBALY VISIBLE */}
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/about" element={<About/>}/>
                <Route path="/contact" element={<Contact/>}/>
                <Route path="/profile" element={<Profile/>}/>           
            </Routes>
        </BrowserRouter>
    </div>
    );
}

/* ==== Create unqiue Profile pages ====
 we have the page Profile.js and from there want to access individual user pages */

// create links to profiles on Profile Page
import {Link} from "react-router-dom";

const Profile = () => {
    return ( 
        <main>
            <h2>Pofile</h2>
            <hr /> {/* horizontal line */}
            <h3>Manuel</h3>
            <Link>go to Manuel</Link> {/* Link to Manuel */}
            <hr />
            <h3>Stefan</h3>
            <Link>go to Stefan</Link>
        </main>
    );
}

// Now we have to create a URL parameter which will be passed in the Profile page
// We have to specify which page should be rendered when the URL parameter will be passed
<BrowserRouter>
    <Navigation />
        <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/about" element={<About/>}/>
            <Route path="/contact" element={<Contact/>}/>
            <Route path="/profile" element={<Profile/>}/>
            <Route path="/profile/:name" element={<ProfileDetails/>}/> {/* self closing Route tag with URL parameter(:name).  */}
        </Routes>
</BrowserRouter>


// replace the :name parameter to the individual profile page name with a custom path in the Link tag
import {Link} from "react-router-dom";

const Profile = () => {
    return ( 
        <main>
            <h2>Pofile</h2>
            <hr />
            <h3>Manuel</h3>
            <Link to="/profile/manuel">go to Manuel</Link>
            <hr />
            <h3>Stefan</h3>
            <Link to="/profile/stefan">go to Stefan</Link>
        </main>
    );
}

// use the function useParams to pass the name parameter to the heading
import {useParams} from "react-router-dom";

const ProfileDetails = () => {
    const params = useParams(); // safe function useParams() as a variable 

    console.log(params)
    return ( 
        <h1>This is the profile of {params.name}</h1> // pass the name parameter to the heading using useParams()
    );
}



/* ==== CSS Modules ==== */

/* create a componen */
const CSSmodule = () => {
    return ( 
    <h1>CSS Module</h1>
    );
}
export default CSSmodule;

/* create CSS module with the same name as the component */
CSSmodule.module.css

// import CSS file as variable into the CSS module JS file, style the element within JS with the CSS module
import styles from "./CSSmodule.module.css"

const CSSmodule = () => {
    return ( 
    <h1 className={styles.btn}>CSS Module</h1>
    );
}
export default CSSmodule;


/* ==== Fragments ==== */
<></>


/* ==== useEffect / useState ==== */
/* used to fetch Data from a server
a effect will be triggered when the page will be rendered.
- we also need the hook useState */

/* syntax:
useEffect(() => {}, [])
*/

// import useState and useEffect
import {useState, useEffect} from "react";

// declare initial state
const [users, setUsers] = useState([]);

const CoinList = () => {
useEffect(() => {
    fetch("https://api.coingecko.com/api/v3/search/trending") // fetching promise 
    .then(response => response.json()) // define promise as "response" and convert it to json
    .then(data => setCoins(data)) // 
}, []) // dependency array will re render forever without it

return (
    {coins.map(coin => <CoinItem coin={coin.item}/>)} // use map() to create a list of coin symbols
)}



/* ==== props ==== */
// can only go from parent to child 
// Sending props
{coins.map(coin => <CoinItem coin={coin.item}/>)} // sending properties with props to CoinItem component. Data comes from the fetch.

// Reciving props
const CoinItem = ({item}) => {
    return ( 
        <img src="{item.small}" alt="" /> // reciving data from props
    );
}
export default CoinItem;



/* ==== useParams ==== */
// part of react-router-dom library
// npm i react-router-dom to install the package

// Home component
const Home = () => {
    return (
        <main>
            <h1>Home</h1>
        </main>
    )
}

// App.js
function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/profile/:name" element={<Profile/>}/> {/* :variable is a dynamic variable */}
            </Routes>
        </BrowserRouter>
    )
}

// profile component
const Profile = () => {
    const { name } = useParams(); // safe function useParams() as a variable 
    return (
        <main>
            <h3>Hello my name is {name}</h3>
        </main>
    )
}


/* ==== more complex fetch ==== */

// Weather component
import { useState } from "react";  // import use state

const Weather = () => {

    const [city, setCity] = useState('') // declare initial state for city
    const [weather, setWeather] = useState(null) // declare initial state for weather 
    const key = "aee547fe9e226d61c52670c75b774740" // declare key
    const limit = 1 // declare limit

    const checkWeather = () => { // declare checkWether function variable
    fetch(`http://api.openweathermap.org/geo/1.0/direct?q=${city},DE&limit=${limit}&appid=${key}`) // fetch URL with variable ${city}, ${limit} and ${key}
        .then(res => res.json())
        .then(data => {
            console.log(data)
            const lon = data[0].lon // get longitude
            const lat = data[0].lat // get latitude
            fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${key}&unit=metric`)
                .then(res => res.json())
                .then(data => setWeather(data)) // get weather data
                console.log(weather)
        })}

    return (
        <main>
            <div>
                <input type={"text"} placeholder="Dein Block" onChange={(e) => setCity (e.target.value)}/> {/* input field with onChange EventListener to fill city variable to the value of the input field */}
                <button onClick={checkWeather}>Check dein Klima</button> {/* runs onClick the checkWeather function */}
            </div>
            {weather && 
                <h1>{weather.main.temp}</h1>} {/* create dynamic h1 tag and fill it with the weather.main.temp data (temprature) from the API */}
        </main>
    )
}

export default Weather

// App.js
function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home/>}/>
            </Routes>
        </BrowserRouter>
    )
}