import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { editBook, update } from '../redux/actions/BookActions';
import { blockInvalidChar } from '../utils/helpers';

const BookForm = (book: { title: any; message: any; category: any; price: any; id: any }) => {
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
      <div onClick={() => dispatch(editBook(book.id))} className="modal-1">
        <form onClick={(e) => e.stopPropagation()}>
          <button onClick={() => dispatch(editBook(book.id))} className="btn-close"></button>
          <h2 className="mb-3">Edit Book</h2>
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
            value={newPrice}
            name="price"
            type="number"
            step="0.01"
            placeholder="Enter new price"
            onChange={(e) => setNewPrice(e.target.value)}
            onKeyDown={blockInvalidChar}
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
          <textarea
            required
            value={newMessage}
            name="message"
            rows={5}
            cols={28}
            placeholder="Enter new description"
            onChange={(e) => setNewMessage(e.target.value)}
          />
          <br /> <br />
          <button className="btn btn-primary mb-2" onClick={handleEdit}>
            Update
          </button>
          <button type="button" className="btn btn-secondary" onClick={() => dispatch(editBook(book.id))}>
            Cancel
          </button>
        </form>
      </div>
    </div>
  );
};
export default BookForm;
