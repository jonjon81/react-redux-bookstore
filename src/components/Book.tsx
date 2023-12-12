import { useDispatch } from 'react-redux';
import { deleteBook, editBook } from '../redux/actions/BookActions';

const Book = ({ book }) => {
  const dispatch = useDispatch();
  return (
    <div className="card" key={book.id}>
      <h2>{book.title}</h2>
      <p>{book.message}</p>
      <p>{book.price}</p>
      <p>{book.category}</p>
      <button className="btn editBtn" onClick={() => dispatch(editBook(book.id))}>
        Edit
      </button>
      <button className="btn deleteBtn" onClick={() => dispatch(deleteBook(book.id))}>
        Delete
      </button>
    </div>
  );
};
export default Book;
