import Book from './Book';
import EditComponent from './EditBook';
import { useSelector } from 'react-redux';

const AllBooks = () => {
  const books = useSelector((state) => state.bookReducer);
  return (
    <>
      {books.map((book) => (
        <div className="col col-xs-6 col-sm-4 col-md-3 col-lg-2" key={book.id}>
          {<Book key={book.id} book={book} />}
          {book.editing && <EditComponent key={book.id} book={book} />}
        </div>
      ))}
    </>
  );
};
export default AllBooks;
