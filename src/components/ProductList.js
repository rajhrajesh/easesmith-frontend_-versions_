import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Modal from './Modal';

function ProductList() {
  const [isModalOpen, setModalOpen] = useState(false);
  const navigate = useNavigate();
  
  const products = [
    { id: 1, name: 'Product 1', price: 100 },
    { id: 2, name: 'Product 2', price: 150 },
  ];

  const viewProduct = () => {
    navigate('/thank-you');
  };

  const addToCart = () => {
    setModalOpen(true);
  };

  return (
    <div>
      {products.map((product) => (
        <div key={product.id}>
          <h2>{product.name}</h2>
          <p>Price: ${product.price}</p>
          <button onClick={viewProduct}>View Product</button>
          <button onClick={addToCart}>Add to Cart</button>
        </div>
      ))}
      {isModalOpen && <Modal onClose={() => setModalOpen(false)} />}
    </div>
  );
}

export default ProductList;
