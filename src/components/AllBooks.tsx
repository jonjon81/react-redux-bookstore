import Book from './Book';
import EditComponent from './EditBook';
import { useSelector } from 'react-redux';

const AllBooks = () => {
  const books = useSelector((state) => state.bookReducer);
  return (
    <>
      <h1>All Books</h1>
      {books.map((book) => (
        <div className="col-md-3" key={book.id}>
          {book.editing ? <EditComponent key={book.id} book={book} /> : <Book key={book.id} book={book} />}
        </div>
      ))}
    </>
  );
};
export default AllBooks;
