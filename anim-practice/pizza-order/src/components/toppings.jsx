
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { pageVariant, buttonVariant, defaultVariant, listItemVariant } from "./animations";
export default function Toppings({pizza, addToppings}){
    const toppings = ['mushrooms', 'peppers', 'onions', 'olives', 'extra cheese', 'tomatoes'];
    const toppings_list = toppings.map((topping, index) => (
        <motion.li key={index} onClick={() => addToppings(topping)} className={pizza.toppings.includes(topping)? 'active' : ''}
            variants={listItemVariant}
            whileHover="whileHover"
            
        >{topping}</motion.li>
    ))
    return(
        <motion.div className="toppings page"
            variants={{...pageVariant, ...defaultVariant}}
            initial={pageVariant.initial}
            animate={pageVariant.animation}
            transition={defaultVariant.transition}
        >
            <h3>Step 2: Choose Toppings</h3>
            <ul>
                {toppings_list}
            </ul>
            
            <Link to="/order">
                <motion.button
                    variants={buttonVariant}
                    whileHover="whileHover"
                >
                    Order
                </motion.button>
            </Link>
            
        </motion.div>
    )
}