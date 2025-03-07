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

function Main({dishes}) {
    return (
    <>
        <div>
            <h2>Welcome to this beautiful restaurant!</h2>
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
    return (
        <div>
            <Header name="Alex" year={new Date().getFullYear()} />            
            <Main dishes={dishObjects}/>
        </div>
    )
}
export default App;