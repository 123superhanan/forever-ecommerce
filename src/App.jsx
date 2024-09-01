
import { Routes, Route } from 'react-router-dom'
import Home from "./Pages/Home.jsx"
import Collection from "./Pages/Collection.jsx"
import Cart from "./Pages/Cart.jsx"
import Order from "./Pages/Order.jsx"
import Contact from "./Pages/Contact.jsx"
import About from "./Pages/About.jsx"
import SignIn from "./Pages/SignIn.jsx"
import PlaceOrder from "./Pages/PlaceOrder.jsx"
import Product from "./Pages/Product.jsx"
import Navbar from "./Components/Navbar.jsx"
import Footer from "./Components/Footer.jsx"
import SearchBar from './Components/SearchBar.jsx'




const App = () => {


  return (
    <div className='px-4  sm:px-[5vw] md:px-[7vw] lg-px-[9vw]'>

<Navbar />
<SearchBar />
<Routes>
    <Route path='/'  element={<Home/>}  />
    <Route path='/about'  element={<About/>}  />
    <Route path='/collection'  element={<Collection/>}  />
    <Route path='/signIn'  element={<SignIn/>}  />
    <Route path='/contact'  element={<Contact/>}  />
    <Route path='/order'  element={<Order/>}  />
    <Route path='/cart'  element={<Cart/>}  />
    <Route path='/product/:productId'  element={<Product/>}  />
    <Route path='/placeOrder'  element={<PlaceOrder/>}  />
</Routes>

<Footer />

    </div>
  )
}

export default App

