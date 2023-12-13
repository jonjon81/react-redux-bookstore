import { useDispatch } from 'react-redux';
import { deleteBook, editBook } from '../redux/actions/BookActions';

const Book = ({ book }) => {
  const dispatch = useDispatch();
  return (
    <div className="card" key={book.id} onClick={() => dispatch(editBook(book.id))}>
      <img className="card-img-top" src="..." alt="Card image cap"></img>
      <div className="card-body">
        <h5 className="card-title">{book.title}</h5>
        <p className="card-text">{book.message}</p>
        <p>{book.category}</p>
        <p>{book.price}</p>
        <button type="button" className="btn deleteBtn btn-danger" onClick={() => dispatch(deleteBook(book.id))}>
          Delete
        </button>
      </div>
    </div>
  );
};
export default Book;
