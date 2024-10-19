import {Route, Routes } from 'react-router-dom';
import ThankYouPage from './components/ThankYouPage';
import ProductList from './components/ProductList';

const App = () => {
  return (
      <Routes>
        <Route path="/" element={<ProductList/>} />
        <Route path="/thank-you" element={<ThankYouPage/>} />
      </Routes>
  )
}

export default App