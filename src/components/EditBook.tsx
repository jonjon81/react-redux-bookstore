import { useState } from 'react';
import { useDispatch } from 'react-redux';

import { update } from '../redux/actions/BookActions';

const BookForm = ({ book }) => {
  const dispatch = useDispatch();

  const [newTitle, setNewTitle] = useState('');
  const [newMessage, setNewMessage] = useState('');
  const [newCategory, setNewCategory] = useState('');
  const [newPrice, setNewPrice] = useState('');

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
          placeholder="Enter Book Title"
          onChange={(e) => setNewTitle(e.target.value)}
        />
        <br /> <br />
        <input
          required
          value={newCategory}
          type="text"
          name="category"
          placeholder="Enter Book Category"
          onChange={(e) => setNewCategory(e.target.value)}
        />
        <br /> <br />
        <input
          required
          value={newPrice}
          type="text"
          name="price"
          placeholder="Enter Book Price"
          onChange={(e) => setNewPrice(e.target.value)}
        />
        <br /> <br />
        <textarea
          required
          value={newMessage}
          name="message"
          rows="5"
          cols="28"
          placeholder="Enter Book Description"
          onChange={(e) => setNewMessage(e.target.value)}
        />
        <br /> <br />
        <button>Update</button>
      </form>
    </div>
  );
};
export default BookForm;
