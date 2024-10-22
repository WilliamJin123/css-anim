
import { Link } from "react-router-dom";


export default function Toppings({pizza, addToppings}){
    const toppings = ['mushrooms', 'peppers', 'onions', 'olives', 'extra cheese', 'tomatoes'];
    const toppings_list = toppings.map((topping, index) => (
        <li key={index} onClick={() => addToppings(topping)} className={pizza.toppings.includes(topping)? 'active' : ''}
        >{topping}</li>
    ))
    return(
        <div className="toppings page">
            <h3>Step 2: Choose Toppings</h3>
            <ul>
                {toppings_list}
            </ul>
            
            <Link to="/order">
                <button>
                    Order
                </button>
            </Link>
            
        </div>
    )
}