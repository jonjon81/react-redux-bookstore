import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { editBook, update } from '../redux/actions/BookActions';

const BookForm = ({ book }) => {
  const dispatch = useDispatch();

  const [newTitle, setNewTitle] = useState(book.title);
  const [newMessage, setNewMessage] = useState(book.message);
  const [newCategory, setNewCategory] = useState(book.category);
  const [newPrice, setNewPrice] = useState(book.price);

  const handleEdit = (e: { preventDefault: () => void }) => {
    e.preventDefault();
    const data = {
      newTitle,
      newMessage,
      newCategory,
      newPrice,
    };
    dispatch(update(book.id, data));
  };
  return (
    <div>
      <form onSubmit={handleEdit}>
        <input
          required
          value={newTitle}
          type="text"
          name="title"
          placeholder="Enter new title"
          onChange={(e) => setNewTitle(e.target.value)}
        />
        <br /> <br />
        <input
          required
          value={newCategory}
          type="text"
          name="category"
          placeholder="Enter new category"
          onChange={(e) => setNewCategory(e.target.value)}
        />
        <br /> <br />
        <input
          required
          value={newPrice}
          type="text"
          name="price"
          placeholder="Enter new price"
          onChange={(e) => setNewPrice(e.target.value)}
        />
        <br /> <br />
        <textarea
          required
          value={newMessage}
          name="message"
          rows="5"
          cols="28"
          placeholder="Enter new description"
          onChange={(e) => setNewMessage(e.target.value)}
        />
        <br /> <br />
        <button>Update</button>
        <button onClick={() => dispatch(editBook(book.id))}>Cancel</button>
      </form>
    </div>
  );
};
export default BookForm;
