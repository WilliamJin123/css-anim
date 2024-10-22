import { useImmer } from "use-immer"
import "./App.css"
import { Route, BrowserRouter as Router, Routes } from "react-router-dom"
import Header from './components/header';
import Home from './components/home';
import Base from './components/base';
import Toppings from './components/toppings';
import Order from './components/order';



export default function App() {
  const [pizza, setPizza] = useImmer({
    base: "",
    toppings: []
  })

  function addToppings(topping) {
    setPizza(draft => {
      if (!draft.toppings.includes(topping)) {
        draft.toppings.push(topping)
      } else {
        draft.toppings = draft.toppings.filter(item => item !== topping)
      }

    })
  }

  function addBase(base) {
    setPizza(draft => {
      draft.base = base
    })
  }
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/base" element={<Base pizza={pizza} addBase={addBase} />}/>
        <Route path="/toppings" element={<Toppings pizza={pizza} addToppings={addToppings} />} />
        <Route path="/order" element={<Order pizza={pizza} />} />
        <Route path="/" element={<Home />} />
      </Routes>
    </Router>
  )
}