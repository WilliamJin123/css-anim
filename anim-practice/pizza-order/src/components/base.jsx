
import { Link } from "react-router-dom"

export default function Base({addBase, pizza}){
    const bases = ['Classic', 'Thin & Crispy', 'Thick Crust']
    const basesList = bases.map((base, index) => (
        <li key={index} onClick={() => addBase(base) } className={pizza.base === base? 'active' : ''}
        >{base}</li>
    ))
    return(
        <div className="bases page">
            <h3>Step 1: Choose Your Base</h3>
            <ul>
                {basesList}
            </ul>
            {pizza.base && (
                <Link to="/toppings">
                    <button>Next</button>
                </Link>
            )}
        </div>
    )
}