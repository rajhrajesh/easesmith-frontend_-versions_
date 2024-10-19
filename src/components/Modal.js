function Modal({ onClose }) {
    return (
      <div className="modal">
        <div className="modal-content">
          <h2>Product added to cart!</h2>
          <button onClick={onClose}>Close</button>
        </div>
      </div>
    );
  }
  
  export default Modal;
  