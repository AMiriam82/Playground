import {useEffect, useReducer} from "react"
import "./App.css";
import chef from "./images/Chefkoch.jpg";

function Header(props)  {
    return (
        <header>

        <h1>{props.name}'s Kitchen</h1>
            <p>Copyright {props.year}</p>
        </header>
    )
}

const items = [
    "Macaroni and Cheese",
    "Salmon with Potatoes",
    "Tofu with Vegetables",
    "Minestrone Soup"
]

const dishObjects = items.map((dish, i) => ({
    id: i,
    title: dish
}))

console.log(dishObjects);

function Main({dishes, openStatus, onStatus}) {
    return (
    <>
        <div>
            <button onClick={() => onStatus(true)}>I want to be {openStatus ? "Closed" : "Open"}</button>
            <h2>Welcome to this beautiful restaurant! {openStatus ? "Open" : "Closed"}</h2>
        </div>
        <main>
            <img src={chef} height={200} alt="A photo of a smilin chef owner" />
        <ul>
            {dishes.map((dish) => (
                <li key={dish.id} style = {{listStyleType: "none"}}>{dish.title}</li>
            ))}
        </ul>
        </main>
    </>
    )
}

function App() {
    const [status, toggle] = useReducer(
        (status) => !status, 
        true);

    useEffect(() => {console.log(
        'The restaurant is ${status ? "open" : "closed"}'
    )}, [status])

    return (
        <div>
            <h1>The restaurant is currently {" "} {status ? "open" : "closed"}</h1>
            <button onClick={toggle}> {status ? "Close" : "Open"} Restaurant</button>   
            <Header name="Alex" year={new Date().getFullYear()} />            
            <Main 
                dishes={dishObjects} 
                openStatus={status} 
                onStatus={toggle}
            />
        </div>
    )
}
export default App;