import { Key } from 'react';
import Book from './Book';
import EditComponent from './EditBook';
import { useSelector } from 'react-redux';

const AllBooks = () => {
  const books = useSelector((state: any) => state.bookReducer);
  return (
    <>
      {books.map((book: { id: Key | null | undefined; editing: any }) => (
        <div className="col col-xs-6 col-sm-4 col-md-3 col-lg-2" key={book.id}>
          {<Book key={book.id + '-a'} book={book} />}
          {book.editing && <EditComponent key={book.id + '-b'} book={book} />}
        </div>
      ))}
    </>
  );
};
export default AllBooks;
