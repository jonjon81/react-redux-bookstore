import { useDispatch } from 'react-redux';
import { deleteBook, editBook } from '../redux/actions/BookActions';
import bookCover from '../../public/book-cover-1.jpg';
import { FaEdit, FaTrashAlt } from 'react-icons/fa';

interface Book1 {
  id: Date;
  title: string;
  message: string;
  price: string;
  category: string;
  editing: boolean;
}

const Book = ({ id, title, message, price, category }: Book1) => {
  const dispatch = useDispatch();
  return (
    <div className="card mb-4" key={title}>
      <div className="image-component" onClick={() => dispatch(editBook(id))}>
        <img className="card-img-top" src={bookCover} alt="Book Cover"></img>
        <h5 className="card-title">{title}</h5>
        <div className="icon-container">
          <FaEdit className="fa-edit" />
        </div>
      </div>
      <div className="card-body">
        <p className="card-price">${price}</p>
        <p className="card-category">{category}</p>
        <p className="card-text book-description">{message}</p>
        <button type="button" className="btn deleteBtn btn-danger" onClick={() => dispatch(deleteBook(id))}>
          <FaTrashAlt />
        </button>
      </div>
    </div>
  );
};
export default Book;
