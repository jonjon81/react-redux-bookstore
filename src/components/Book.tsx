import { useDispatch } from 'react-redux';
import { deleteBook, editBook } from '../redux/actions/BookActions';
import bookCover from '../../public/book-cover.jpg';
import { FaEdit, FaTrashAlt } from 'react-icons/fa';

const Book = ({ book }) => {
  const dispatch = useDispatch();
  return (
    <div className="card mb-4" key={book.id}>
      <div className="image-component">
        <img className="card-img-top" src={bookCover} alt="Book Cover"></img>
        <div onClick={() => dispatch(editBook(book.id))} className="icon-container">
          <FaEdit className="fa-edit" />
        </div>
      </div>
      <div className="card-body">
        <h5 className="card-title">{book.title}</h5>
        <p>
          <strong>${book.price}</strong>
        </p>
        <p>{book.category}</p>
        <p className="card-text book-description">{book.message}</p>
        <button type="button" className="btn deleteBtn btn-danger" onClick={() => dispatch(deleteBook(book.id))}>
          <FaTrashAlt />
        </button>
      </div>
    </div>
  );
};
export default Book;
