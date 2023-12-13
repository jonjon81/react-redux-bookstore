const initialState = [
  {
    title: 'guiness world records',
    message:
      'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nihil dolorum minus obcaecati sequi esse iusto dignissimos doloribus, sit quasi deleniti qui consequuntur.',
    id: '1',
    category: 'fiction',
    price: 22.99,
    editing: false,
  },
  {
    title: 'food for live',
    message:
      'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolorum odit, placeat praesentium in eos repellat cumque labore alias hic ad vero error!',
    id: '2',
    category: 'health',
    price: 10.55,
    editing: false,
  },
  {
    title: 'Baking Yesteryear',
    message:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam incidunt, officia alias animi rem quo sint dolores fuga voluptate repudiandae laudantium deleniti.',
    id: '3',
    category: 'baking',
    price: 14.25,
    editing: false,
  },
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
