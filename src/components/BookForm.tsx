import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addBook } from '../redux/actions/BookActions';
const BookForm = () => {
  const dispatch = useDispatch();
  const [title, setTitle] = useState('');
  const [price, setPrice] = useState('');
  const [category, setCategory] = useState('');
  const [message, setMessage] = useState('');
  const [show, setShow] = useState(false);

  const handleSubmit = (e: { preventDefault: () => void }) => {
    e.preventDefault();
    const data = {
      id: new Date(),
      title,
      message,
      price,
      category,
      editing: false,
    };
    dispatch(addBook(data));
    setTitle('');
    setMessage('');
    setPrice('');
    setCategory('');
    setShow(!show);
  };
  return (
    <>
      <button type="button" className="btn btn-success" onClick={() => setShow(!show)}>
        Add a book
      </button>
      {show && (
        <div className="modal-1">
          <form onSubmit={handleSubmit}>
            <input
              required
              value={title}
              type="text"
              name="title"
              placeholder="Enter Book Title"
              onChange={(e) => setTitle(e.target.value)}
            />
            <br /> <br />
            <input
              required
              value={price}
              type="number"
              name="price"
              placeholder="Enter Book Price"
              onChange={(e) => setPrice(e.target.value)}
            />
            <br /> <br />
            <input
              required
              value={category}
              type="text"
              name="category"
              placeholder="Enter Book Category"
              onChange={(e) => setCategory(e.target.value)}
            />
            <br /> <br />
            <textarea
              required
              value={message}
              name="message"
              rows="5"
              cols="28"
              placeholder="Enter Book Description"
              onChange={(e) => setMessage(e.target.value)}
            />
            <br /> <br />
            <button>Add Book now</button>
            <button onClick={() => setShow(!show)}>Cancel</button>
          </form>
        </div>
      )}
    </>
  );
};
export default BookForm;
