import './index.css';
import BookForm from './components/BookForm';
import AllBooks from './components/AllBooks';

export default function App() {
  return (
    <div className="App">
      <h1>Bookstore</h1>
      <BookForm />
      <AllBooks />
    </div>
  );
}
