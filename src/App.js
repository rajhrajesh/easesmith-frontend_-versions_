import React from 'react'
import Header from './components/Header'
import Home from './components/Home'
import ProductList from './components/ProductList'
import Footer from './components/Footer'

const App = () => {
    return (
        <div className=''>
            <Header/>
            <Home/>
            <ProductList/>
            <Footer/>

        </div>
    )
}

export default App