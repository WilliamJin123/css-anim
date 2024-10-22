import { motion } from "framer-motion"
import { pageVariant, childVariant} from "./animations"



export default function Order({ pizza }) {

    return (
        <motion.div className="order page"
            variants={pageVariant}
            initial="initial"
            animate="animation"
        >
            <h2>Thank you for the order</h2>
            {pizza.toppings.length > 0?
                <>
                    <motion.p variants={childVariant}>You ordered a {pizza.base} pizza with: </motion.p>
                    <motion.div variants={childVariant}>
                        {pizza.toppings.map(topping => (
                            <motion.div key={topping} variants={childVariant}>
                                {topping}</motion.div>
                        ))}
                    </motion.div>
                    
                </>
                
                :
                <motion.p variants={childVariant}>You ordered a {pizza.base}pizza</motion.p>
                
            }
            
        </motion.div>
    )
}