

export default function Order({ pizza }) {

    return (
        <div className="order page">
            <h2>Thank you for the order</h2>
            {pizza.toppings.length > 0?
                <>
                    <p>You ordered a {pizza.base} pizza with: </p>
                    {pizza.toppings.map(topping => <div key={topping}>{topping}</div>)}
                </>
                
                :
                <p>You ordered a {pizza.base} pizza</p>
                
            }
            
        </div>
    )
}