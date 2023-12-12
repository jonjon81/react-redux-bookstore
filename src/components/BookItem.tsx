import { FaTrash } from 'react-icons/fa';

const BookItem = () => {
  return (
    <div className="col-md-3 card">
      <div className="card-body">
        <h5 className="card-title">Card title</h5>
        <p className="card-text">
          Some quick example text to build on the card title and make up the bulk of the card's content.
        </p>
        <button className="remove-btn">
          <FaTrash />
        </button>
      </div>
    </div>
  );
};

export default BookItem;
