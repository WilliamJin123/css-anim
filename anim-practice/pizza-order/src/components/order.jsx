import { motion } from "framer-motion"
import { pageVariant, childVariant} from "./animations"

import { useState } from "react"

export default function Order({ pizza }) {
    const [showTitle, setShowTitle] = useState(true)

    useEffect(() => {
        const timer = setTimeout(() => {
            setShowTitle(false);
        }, 4000);

    return () => clearTimeout(timer);
    }, [])

        <motion.div className="order page"
            variants={pageVariant}
            initial="initial"
            animate="animation"
        >
            {showTitle && (
                <h2>Thank you for the order</h2>
            )}
            
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