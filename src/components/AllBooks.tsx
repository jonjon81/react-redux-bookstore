import { FC } from 'react';
import Book from './Book';
import EditComponent from './EditBook';
import { useSelector } from 'react-redux';

interface BookProps {
  id: string;
  title: string;
  price: number;
  category: string;
  message: string;
  editing: boolean;
}

const AllBooks: FC = () => {
  const books: BookProps[] = useSelector((state: any) => state.bookReducer);
  return (
    <>
      {books.map((book: BookProps) => (
        <div className="col col-xs-6 col-sm-4 col-md-3 col-lg-2" key={book.id}>
          {<Book key={book.id + '-a'} book={book} />}
          {book.editing && <EditComponent key={book.id + '-b'} book={book} />}
        </div>
      ))}
    </>
  );
};

export default AllBooks;
