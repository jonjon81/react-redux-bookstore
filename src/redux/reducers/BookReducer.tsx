const initialState = [
  { title: 'batman', message: 'message', id: '1', category: 'action', price: 132, editing: false },
  { title: 'superman', message: 'message', id: '1', category: 'comedy', price: 322, editing: false },
  { title: 'flash', message: 'message', id: '1', category: 'romance', price: 453, editing: false },
];

const bookReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_BOOK':
      return state.concat([action.payload]);

    case 'DELETE_BOOK':
      return state.filter((book) => book.id !== action.payload);

    case 'EDIT_BOOK':
      return state.map((book) => (book.id === action.payload ? { ...book, editing: !book.editing } : book));
    case 'UPDATE':
      return state.map((book) => {
        if (book.id === action.payload) {
          console.log(action.payload);
          return {
            ...book,
            title: action.data.newTitle,
            message: action.data.newMessage,
            category: action.data.newCategory,
            price: action.data.newPrice,
            editing: !book.editing,
          };
        } else return book;
      });

    default:
      return state;
  }
};
export default bookReducer;
